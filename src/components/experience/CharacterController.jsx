"use client";

import { useState, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";

import PortfolioAvatar from "@/models/PortfolioAvatar";
import { useKeyboardControls } from "@react-three/drei";

const CharacterController = () => {
	// subscriberKeys() is a function to subscribe to key changes
	// getKeys() is a function to get the current states of the keys
	const [subscriberKeys, getKeys] = useKeyboardControls();
	const characterRef = useRef();

	// Setup for jump
	const { rapier, world } = useRapier();
	// const rapierWorld = world.raw();
	const [canJump, setCanJump] = useState(false);

	useFrame((state, delta) => {
		// Know if the WASD keys are being pressed
		const { forward, backward, leftward, rightward } = getKeys();

		const impulse = { x: 0, y: 0, z: 0 };
		characterRef.current.applyImpulse(impulse);
		const impulseStrength = 0.6 * delta;
		// console.log(forward);

		if (forward) {
			impulse.z -= impulseStrength;
		}
	});

	return (
		<>
			<RigidBody ref={characterRef} colliders={false}>
				<CapsuleCollider args={[0.7, 0.3]} position={[2, 3.0, 2]} />
				<group position={[2, 2, 2]}>
					<PortfolioAvatar />
				</group>
			</RigidBody>
		</>
	);
};

export default CharacterController;

// {
// 		/**
// 		 * Getting all keys from useKeyboardControls
// 		 */
// 		const { forward, backward, leftward, rightward, jump, run } = getKeys();
// 		// Getting moving directions
// 		if (forward) {
// 			// Apply camera rotation to character model
// 			modelEuler.y = pivot.rotation.y;
// 		} else if (backward) {
// 			// Apply camera rotation to character model
// 			modelEuler.y = pivot.rotation.y + Math.PI;
// 		} else if (leftward) {
// 			// Apply camera rotation to character model
// 			modelEuler.y = pivot.rotation.y + Math.PI / 2;
// 		} else if (rightward) {
// 			// Apply camera rotation to character model
// 			modelEuler.y = pivot.rotation.y - Math.PI / 2;
// 		}
// 		if (forward && leftward) {
// 			// Apply camera rotation to character model
// 			modelEuler.y = pivot.rotation.y + Math.PI / 4;
// 		} else if (forward && rightward) {
// 			// Apply camera rotation to character model
// 			modelEuler.y = pivot.rotation.y - Math.PI / 4;
// 		} else if (backward && leftward) {
// 			// Apply camera rotation to character model
// 			modelEuler.y = pivot.rotation.y - Math.PI / 4 + Math.PI;
// 		} else if (backward && rightward) {
// 			// Apply camera rotation to character model
// 			modelEuler.y = pivot.rotation.y + Math.PI / 4 + Math.PI;
// 		}
// 		// Move character to the moving direction
// 		if (forward || backward || leftward || rightward) moveCharacter(delta, run);
// 		// Character current velocity
// 		currentVel.copy(characterRef.current.linvel());
// 		// Jump impulse
// 		if (jump && canJump) {
// 			// characterRef.current.applyImpulse(jumpDirection.set(0, 0.5, 0), true);
// 			characterRef.current.setLinvel(
// 				{
// 					x: currentVel.x,
// 					y: run ? sprintJumpMult * jumpVel : jumpVel,
// 					z: currentVel.z,
// 				},
// 				true
// 			);
// 		}
// 		// Rotate character model
// 		modelQuat.setFromEuler(modelEuler);
// 		characterModelRef.current.quaternion.rotateTowards(
// 			modelQuat,
// 			delta * turnSpeed
// 		);
// 		/**
// 		 *  Camera movement
// 		 */
// 		pivotPosition.set(
// 			characterRef.current.translation().x,
// 			characterRef.current.translation().y + 0.5,
// 			characterRef.current.translation().z
// 		);
// 		pivot.position.lerp(pivotPosition, 0.2);
// 		state.camera.lookAt(pivot.position);
// 		/**
// 		 * Ray casting detect if on ground
// 		 */
// 		// const origin = characterRef.current.translation();
// 		// const rayCast = new rapier.Ray(origin, rayDir);
// 		// const rayHit = rapierWorld.castRay(
// 		// 	rayCast,
// 		// 	rayLength,
// 		// 	true,
// 		// 	null,
// 		// 	null,
// 		// 	characterRef.current
// 		// );
// 		// if (rayHit && rayHit.toi < floatingDis + 0.1) {
// 		// 	setCanJump(true);
// 		// } else {
// 		// 	setCanJump(false);
// 		// }
// }
