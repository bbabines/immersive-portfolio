"use client";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";

import PortfolioAvatar from "@/models/PortfolioAvatar";
import { useKeyboardControls } from "@react-three/drei";

const CharacterController = () => {
	// subscriberKeys() is a function to subscribe to key changes
	// getKeys() is a function to get the current states of the keys
	const [subscriberKeys, getKeys] = useKeyboardControls();
	const rigidBodyRef = useRef();

	let isOnFloor = useRef(true);

	// For lerping
	const [smoothedCameraPosition] = useState(
		() => new THREE.Vector3(30, 30, 30)
	); // Added coordinates for initial camera position after loading
	const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

	useFrame((state, delta) => {
		// Know if the WASD keys are being pressed
		const { forward, backward, leftward, rightward, jump, run } = getKeys();

		const impulse = { x: 0, y: 0, z: 0 };

		const MOVEMENT_SPEED = 100 * delta;
		const JUMP_FORCE = 500 * delta;
		const MAX_VEL = 5;

		const linearVelocity = rigidBodyRef.current.linvel();
		let changeRotation = false;

		// Main Controls
		if (forward && linearVelocity.z > -MAX_VEL) {
			impulse.z -= MOVEMENT_SPEED;
			changeRotation = true;
		}

		if (backward && linearVelocity.z < MAX_VEL) {
			impulse.z += MOVEMENT_SPEED;
			changeRotation = true;
		}

		if (leftward && linearVelocity.x > -MAX_VEL) {
			impulse.x -= MOVEMENT_SPEED;
			changeRotation = true;
		}

		if (rightward && linearVelocity.x < MAX_VEL) {
			impulse.x += MOVEMENT_SPEED;
			changeRotation = true;
		}

		// Run
		if (run && forward) {
			impulse.z -= MOVEMENT_SPEED * 0.2;
		}

		if (run && backward) {
			impulse.z += MOVEMENT_SPEED * 0.2;
		}

		if (run && leftward) {
			impulse.x -= MOVEMENT_SPEED * 0.2;
		}

		if (run && rightward) {
			impulse.x += MOVEMENT_SPEED * 0.2;
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
		const cameraPosition = new THREE.Vector3(); // Create coordinates for the camera
		cameraPosition.copy(bodyPosition); // Copy the position of the body
		// Offset the coordinate
		cameraPosition.x += 3;
		cameraPosition.y += 20;
		cameraPosition.z += 40;

		const cameraTarget = new THREE.Vector3(); // Create coordinates for the camera target
		cameraTarget.copy(bodyPosition);
		cameraTarget.y += 0.25;

		// Add lerping
		smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
		smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

		//Add camera and camera position with the smoothed positions
		state.camera.position.copy(smoothedCameraPosition);
		state.camera.lookAt(smoothedCameraTarget);

		/**
		 * Apply the impulses upon key push
		 */
		rigidBodyRef.current.applyImpulse(impulse, true);
	});

	// Used for rotating the model
	const characterRef = useRef();

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
		</>
	);
};

export default CharacterController;
