"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { useKeyboardControls, OrbitControls } from "@react-three/drei";

// import { useMovementContext } from "../context/MovementContext";
import { useAnimationContext } from "../context/CharacterAnimationContext";

import PortfolioAvatar from "@/models/PortfolioAvatar";

const CharacterController = ({ moveData }) => {
	// const { movement, setMovement } = useMovementContext();
	// Joystick movement
	const {
		leftwardJoystick,
		rightwardJoystick,
		forwardJoystick,
		backwardJoystick,
	} = moveData;

	const { characterAnimationState, setCharacterAnimationState } =
		useAnimationContext();

	const [subscriberKeys, getKeys] = useKeyboardControls(); // getKeys() is a function to get the current states of the keys

	const [smoothedCameraPosition] = useState(() => new THREE.Vector3());
	const [smoothedCameraTarget] = useState(() => new THREE.Vector3());
	const [isRunning, setIsRunning] = useState(false);

	const rigidBodyRef = useRef(); // Used for character controls
	const characterRef = useRef(); // Used for rotating the model
	const orbitControlsRef = useRef();
	let isOnFloor = useRef(true); // Needed useRef for jump instead of useState

	const camera = useThree((state) => state.camera);

	// For handling shift/running properly
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Shift") {
				setIsRunning(true);
			}
		};

		const handleKeyUp = (event) => {
			if (event.key === "Shift") {
				setIsRunning(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	useEffect(() => {
		if (isRunning !== true) {
			setCharacterAnimationState("idle");
		}
	}, [setCharacterAnimationState, characterAnimationState]);

	useFrame((state, delta) => {
		// Know if the WASD keys are being pressed
		const { forward, backward, leftward, rightward, jump, run, shift } =
			getKeys();
		const impulse = { x: 0, y: 0, z: 0 };

		const MOVEMENT_SPEED = 200 * delta;
		const JUMP_FORCE = 500 * delta;
		const MAX_VEL = 5;
		const RUN_FACTOR = isRunning ? 2 : 1; // If 'run' key is pressed, RUN_FACTOR is 3, else 1
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
		if (
			(forward && magnitude < MAX_VEL * movementMultiplier) ||
			(forwardJoystick && magnitude < MAX_VEL * movementMultiplier)
		) {
			impulse.x += cameraForward.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z += cameraForward.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
		}

		if (
			(backward && magnitude < MAX_VEL * movementMultiplier) ||
			(backwardJoystick && magnitude < MAX_VEL * movementMultiplier)
		) {
			impulse.x -= cameraForward.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z -= cameraForward.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
		}

		if (
			(leftward && magnitude < MAX_VEL * movementMultiplier) ||
			(leftwardJoystick && magnitude < MAX_VEL * movementMultiplier)
		) {
			impulse.x -= cameraRight.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z -= cameraRight.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
		}

		if (
			(rightward && magnitude < MAX_VEL * movementMultiplier) ||
			(rightwardJoystick && magnitude < MAX_VEL * movementMultiplier)
		) {
			impulse.x += cameraRight.x * MOVEMENT_SPEED * movementMultiplier;
			impulse.z += cameraRight.z * MOVEMENT_SPEED * movementMultiplier;
			changeRotation = true;
		}

		const desiredChange = new THREE.Vector3();

		// Run
		if (isRunning) {
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
		cameraTarget.z += 1.25;
		cameraTarget.x += 1.25;

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
					<PortfolioAvatar />
				</group>
			</RigidBody>

			<OrbitControls ref={orbitControlsRef} maxDistance={25} minDistance={20} />
		</>
	);
};

export default CharacterController;
