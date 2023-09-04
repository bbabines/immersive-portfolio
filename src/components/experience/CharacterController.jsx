"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { useKeyboardControls, OrbitControls } from "@react-three/drei";

import PortfolioAvatar from "@/models/PortfolioAvatar";

const CharacterController = () => {
	const [subscriberKeys, getKeys] = useKeyboardControls(); // getKeys() is a function to get the current states of the keys
	const [characterAnimationState, setCharacterAnimationState] = useState("");
	const [smoothedCameraPosition] = useState(() => new THREE.Vector3());
	const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

	const rigidBodyRef = useRef(); // Used for character controls
	const characterRef = useRef(); // Used for rotating the model
	const orbitControlsRef = useRef();
	let isOnFloor = useRef(true); // Needed useRef for jump instead of useState

	const camera = useThree((state) => state.camera);

	useFrame((state, delta) => {
		// Know if the WASD keys are being pressed
		const { forward, backward, leftward, rightward, jump, run } = getKeys();
		const impulse = { x: 0, y: 0, z: 0 };

		const MOVEMENT_SPEED = 200 * delta;
		const JUMP_FORCE = 500 * delta;
		const MAX_VEL = 5;
		const RUN_FACTOR = run ? 2 : 1; // If 'run' key is pressed, RUN_FACTOR is 3, else 1
		const LERP_FACTOR = 0.1; // Adjust this for faster/slower interpolation. 0.1 means 10% of the distance will be covered in each frame.
		let movementMultiplier = 1; // Default multiplier for walking
		movementMultiplier *= RUN_FACTOR;
		let maxVelocityCap = MAX_VEL; // Default velocity cap

		const linearVelocity = rigidBodyRef.current.linvel();
		let changeRotation = false;

		// Compute Camera's Forward Direction
		const cameraForward = new THREE.Vector3(0, 0, -1);
		camera.getWorldDirection(cameraForward);

		// Project this Direction to the XYZ plane
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
			setCharacterAnimationState("walk");
		}

		if (backward && magnitude < MAX_VEL * movementMultiplier) {
			impulse.x -= cameraForward.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z -= cameraForward.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
			setCharacterAnimationState("walk");
		}

		if (leftward && magnitude < MAX_VEL * movementMultiplier) {
			impulse.x -= cameraRight.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z -= cameraRight.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
			setCharacterAnimationState("walk");
		}

		if (rightward && magnitude < MAX_VEL * movementMultiplier) {
			impulse.x += cameraRight.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z += cameraRight.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
			setCharacterAnimationState("walk");
		}

		const desiredChange = new THREE.Vector3();

		// Run
		if (run) {
			const RUN_FACTOR = 20;
			setCharacterAnimationState("run");

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
			impulse.y += JUMP_FORCE * 0.9;
			isOnFloor.current = false;
			setCharacterAnimationState("jump");
		}

		if (changeRotation) {
			const angle = Math.atan2(linearVelocity.x, linearVelocity.z);
			characterRef.current.rotation.y = angle;
		}

		// Camera
		const bodyPosition = rigidBodyRef.current.translation(); // Get the body position

		// Camera Position
		const cameraPosition = new THREE.Vector3();

		cameraPosition.copy(bodyPosition);
		cameraPosition.z += 20.25;
		cameraPosition.y += 10.65;

		// Lerp Camera Position
		smoothedCameraPosition.lerp(cameraPosition, LERP_FACTOR);

		// Camera Target
		const cameraTarget = new THREE.Vector3();
		cameraTarget.copy(bodyPosition);
		cameraTarget.y += 8.25;

		// Lerp Camera Target
		smoothedCameraTarget.lerp(cameraTarget, LERP_FACTOR);

		// Fixed camera view
		// state.camera.position.copy(cameraPosition);
		// state.camera.lookAt(cameraTarget);

		// Allows for manual OrbitControls movement
		// orbitControlsRef.current.target.copy(cameraTarget); // Without Lerp
		orbitControlsRef.current.target.copy(smoothedCameraTarget); // With Lerp
		orbitControlsRef.current.update();

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
				position={[-54, 2, 22]}
			>
				<CapsuleCollider args={[0.7, 0.3]} position={[2, 3.0, 2]} />
				<group position={[2, 2, 2]} ref={characterRef}>
					<PortfolioAvatar
						setCharacterAnimationState={setCharacterAnimationState}
						characterAnimationState={characterAnimationState}
					/>
				</group>
			</RigidBody>

			<OrbitControls ref={orbitControlsRef} maxDistance={25} />
		</>
	);
};

export default CharacterController;
