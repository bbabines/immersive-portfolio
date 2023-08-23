"use client";

import { useRef } from "react";
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

	useFrame((state, delta) => {
		// Know if the WASD keys are being pressed
		const { forward, backward, leftward, rightward, jump } = getKeys();

		const impulse = { x: 0, y: 0, z: 0 };

		const MOVEMENT_SPEED = 25 * delta;
		const JUMP_FORCE = 500 * delta;
		const MAX_VEL = 5;

		const linearVelocity = rigidBodyRef.current.linvel();
		let changeRotation = false;

		if (forward && linearVelocity.z < MAX_VEL) {
			impulse.z += MOVEMENT_SPEED;
			changeRotation = true;
		}

		if (backward && linearVelocity.z > -MAX_VEL) {
			impulse.z -= MOVEMENT_SPEED;
			changeRotation = true;
		}

		if (leftward && linearVelocity.x < MAX_VEL) {
			impulse.x += MOVEMENT_SPEED;
			changeRotation = true;
		}

		if (rightward && linearVelocity.x > -MAX_VEL) {
			impulse.x -= MOVEMENT_SPEED;
			changeRotation = true;
		}

		if (jump && isOnFloor.current) {
			impulse.y += JUMP_FORCE;
			isOnFloor.current = false;
		}

		// Rotation when turning.
		if (changeRotation) {
			const angle = Math.atan2(linearVelocity.x, linearVelocity.z);
			characterRef.current.rotation.y = angle;
		}

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
