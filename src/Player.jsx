import { RigidBody, useRapier } from "@react-three/rapier";
import { useFrame, useLoader } from "@react-three/fiber";
import { useKeyboardControls, useAnimations } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import useGame from "./useGame";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import Racer from "../Racer";
import { Test } from "../Test";

const Player = () => {
	const oldManRef = useRef();

	// Keys set in index.jsx mapped to here
	const [subscribeKeys, getKeys] = useKeyboardControls();

	const { rapier, world } = useRapier();
	const rapierWorld = world.raw();

	// Change Vector3 arguments to change starting position of camera.
	const [smoothedCameraPosition] = useState(
		() => new THREE.Vector3(10, 10, 10)
	);
	const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

	const jump = () => {
		const origin = oldManRef.current.translation();
		origin.y -= 0.31;
		const direction = { x: 0, y: -1, z: 0 };

		// To disable jumping multiple times, calculate distance off the ground

		// origin and direction needed for .Ray()
		const ray = new rapier.Ray(origin, direction);

		// 10 is max distance of the ray; The true treats everything as solid.
		const hit = rapierWorld.castRay(ray, 10, true);

		if (hit.toi < 0.15) oldManRef.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
	};

	const reset = () => {
		console.log("reset");
		oldManRef.current.setTranslation({ x: 0, y: 1, z: 0 });
		oldManRef.current.setLinvel({ x: 0, y: 0, z: 0 });
		oldManRef.current.setAngvel({ x: 0, y: 0, z: 0 });
	};

	useEffect(() => {
		const unsubscribeReset = useGame.subscribe(
			(state) => state.phase,
			(value) => {
				if (value === "ready") reset();
			}
		);

		const unsubscribeJump = subscribeKeys(
			(state) => state.jump,
			(value) => {
				if (value) jump();
			}
		);

		const unsubscribeAny = subscribeKeys(() => {
			start();
		});

		return () => {
			unsubscribeReset();
			unsubscribeJump();
			unsubscribeAny();
		};
	}, []);

	// Starts game wheUSEFRAMEn a key is pressed. NOT IMPLEMENTED IN THE BELOW
	const start = useGame((state) => state.start);
	// End game when arriving at the end. NOT IMPLEMENTED IN THE BELOW
	const end = useGame((state) => state.end);
	// Restart when out of bounds.
	const restart = useGame((state) => state.restart);
	// NOT IMPLEMENTED IN THE BELOW
	const blockCount = useGame((state) => state.blockCount);

	// Checking keys on each frame
	useFrame((state, delta) => {
		// Camera

		// Get position of the oldManRef
		const oldManRefPosition = oldManRef.current.translation();

		const cameraPosition = new THREE.Vector3();
		cameraPosition.copy(oldManRefPosition);
		cameraPosition.z += 8.25;
		cameraPosition.y += 0.65;

		const cameraTarget = new THREE.Vector3();
		cameraTarget.copy(oldManRefPosition);
		cameraTarget.y += 0.25;

		smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
		smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

		state.camera.position.copy(smoothedCameraPosition);
		state.camera.lookAt(smoothedCameraTarget);

		// Movement

		const { forward, backward, leftward, rightward } = getKeys();

		const impulse = { x: 0, y: 0, z: 0 };
		const torque = { x: 0, y: 0, z: 0 };

		// Keeping forces constant across different devices
		const impulseStrength = 0.6 * delta;
		const torqueStrength = 0.2 * delta;

		// if FORWARD key is pressed apply these forces
		if (forward) {
			impulse.z -= impulseStrength;
			torque.x -= torqueStrength;
		}
		// if RIGHT key is pressed apply these forces
		if (rightward) {
			impulse.x += impulseStrength;
			torque.z -= torqueStrength;
		}
		// if BACK key is pressed apply these forces
		if (backward) {
			impulse.z += impulseStrength;
			torque.x += torqueStrength;
		}
		// if LEFT key is pressed apply these forces
		if (leftward) {
			impulse.x -= impulseStrength;
			torque.z += torqueStrength;
		}

		oldManRef.current.applyImpulse(impulse);
		oldManRef.current.applyTorqueImpulse(torque);

		// PHASES

		// Start
		if (oldManRefPosition.z < -(blockCount * 4 + 2)) end();

		// Restart
		if (oldManRefPosition.y < -4) restart();
	});

	const oldManFBX = useLoader(FBXLoader, "./old-guy.fbx");
	// const { actions } = useAnimations();

	return (
		<RigidBody
			ref={oldManRef}
			restitution={0.2}
			friction={1}
			position={[0, 1, 0]}
			colliders="hull"
			// Slowing inertia of the impulse and torque above
			linearDamping={0.5}
			angularDamping={0.5}
		>
			{/* <mesh castShadow>
				<icosahedronGeometry args={[0.3, 1]} />
				<meshStandardMaterial flatShading color="mediumpurple" />
			</mesh> */}
			<Racer />
			{/* <Test /> */}
		</RigidBody>
	);
};

export default Player;

{
	/* <primitive object={oldManFBX} scale={0.01} ref={oldManRef} /> */
}
