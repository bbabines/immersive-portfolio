"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";

import PortfolioAvatar from "@/models/PortfolioAvatar";
import {
	useKeyboardControls,
	PerspectiveCamera,
	PresentationControls,
	OrbitControls,
} from "@react-three/drei";

const CharacterController = () => {
	const [subscriberKeys, getKeys] = useKeyboardControls(); // getKeys() is a function to get the current states of the keys

	const rigidBodyRef = useRef(); // Used for character controls
	const characterRef = useRef(); // Used for rotating the model
	const orbitControlsRef = useRef();
	let isOnFloor = useRef(true); // Needed useRef for jump instead of useState

	const camera = useThree((state) => state.camera);

	useFrame((state, delta) => {
		// Know if the WASD keys are being pressed
		const { forward, backward, leftward, rightward, jump, run } = getKeys();

		const impulse = { x: 0, y: 0, z: 0 };

		const MOVEMENT_SPEED = 100 * delta;
		const JUMP_FORCE = 500 * delta;
		const MAX_VEL = 5;
		const RUN_FACTOR = run ? 3 : 1; // If 'run' key is pressed, RUN_FACTOR is 3, else 1
		let movementMultiplier = 1; // Default multiplier for walking
		movementMultiplier *= RUN_FACTOR;
		let maxVelocityCap = MAX_VEL; // Default velocity cap

		const linearVelocity = rigidBodyRef.current.linvel();
		let changeRotation = false;

		// Compute Camera's Forward Direction
		const cameraForward = new THREE.Vector3(0, 0, -1);
		camera.getWorldDirection(cameraForward);

		// Project this Direction to the XYZ pllane
		cameraForward.y = 0; // Ignore vertical component
		cameraForward.normalize(); // Normalize to make it a unit vector

		const cameraRight = new THREE.Vector3();
		cameraRight
			.crossVectors(cameraForward, new THREE.Vector3(0, 1, 0))
			.normalize();

		// Use .x, .y, and .z attributes of the linearVelocity object to compute the magnitude manually:
		const magnitude = Math.sqrt(
			linearVelocity.x ** 2 + linearVelocity.y ** 2 + linearVelocity.z ** 2
		);

		// Main Controls

		if (forward && magnitude < MAX_VEL * movementMultiplier) {
			impulse.x += cameraForward.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z += cameraForward.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
		}

		if (backward && magnitude < MAX_VEL * movementMultiplier) {
			impulse.x -= cameraForward.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z -= cameraForward.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
		}

		if (leftward && magnitude < MAX_VEL * movementMultiplier) {
			impulse.x -= cameraRight.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z -= cameraRight.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
		}

		if (rightward && magnitude < MAX_VEL * movementMultiplier) {
			impulse.x += cameraRight.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z += cameraRight.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
		}

		const desiredChange = new THREE.Vector3();

		// Run
		if (run) {
			const RUN_FACTOR = 20;

			if (forward) {
				desiredChange.x += cameraForward.x * MOVEMENT_SPEED * RUN_FACTOR;
				desiredChange.z += cameraForward.z * MOVEMENT_SPEED * RUN_FACTOR;
			}

			if (backward) {
				desiredChange.x -= cameraForward.x * MOVEMENT_SPEED * RUN_FACTOR;
				desiredChange.z -= cameraForward.z * MOVEMENT_SPEED * RUN_FACTOR;
			}

			if (leftward) {
				desiredChange.x -= cameraRight.x * MOVEMENT_SPEED * RUN_FACTOR;
				desiredChange.z -= cameraRight.z * MOVEMENT_SPEED * RUN_FACTOR;
			}

			if (rightward) {
				desiredChange.x += cameraRight.x * MOVEMENT_SPEED * RUN_FACTOR;
				desiredChange.z += cameraRight.z * MOVEMENT_SPEED * RUN_FACTOR;
			}

			maxVelocityCap *= RUN_FACTOR; // Increase the velocity cap during the run
		}

		// Compute the total impulse magnitude and cap it to the adjusted maximum velocity
		const totalImpulseMagnitude = Math.sqrt(
			impulse.x * impulse.x + impulse.y * impulse.y + impulse.z * impulse.z
		);
		if (totalImpulseMagnitude > MAX_VEL * movementMultiplier) {
			const scale = (MAX_VEL * movementMultiplier) / totalImpulseMagnitude;
			impulse.x *= scale;
			impulse.y *= scale;
			impulse.z *= scale;
		}

		// Jump
		if (jump && isOnFloor.current) {
			impulse.y += JUMP_FORCE;
			isOnFloor.current = false;
		}

		if (changeRotation) {
			const angle = Math.atan2(linearVelocity.x, linearVelocity.z);
			characterRef.current.rotation.y = angle;
		}

		// Camera
		const bodyPosition = rigidBodyRef.current.translation(); // Get the body position

		if (orbitControlsRef.current) {
			orbitControlsRef.current.target.set(
				bodyPosition.x,
				bodyPosition.y + 10,
				bodyPosition.z
			);
		}

		/**
		 * Apply the impulses upon key push
		 */
		rigidBodyRef.current.applyImpulse(impulse, true);
	});

	return (
		<>
			<RigidBody
				ref={rigidBodyRef}
				colliders={false}
				enabledRotations={[false, false, false]}
				onCollisionEnter={() => {
					isOnFloor.current = true;
				}}
			>
				<CapsuleCollider args={[0.7, 0.3]} position={[2, 3.0, 2]} />
				<group position={[2, 2, 2]} ref={characterRef}>
					<PortfolioAvatar />
				</group>
			</RigidBody>

			<OrbitControls ref={orbitControlsRef} minDistance={10} maxDistance={25} />
		</>
	);
};

export default CharacterController;
