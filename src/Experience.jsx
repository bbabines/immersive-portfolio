import * as THREE from "three";
import { useRef, useState } from "react";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Physics, Debug, CuboidCollider, RigidBody } from "@react-three/rapier";

import Lights from "./Lights.jsx";
import Player from "./Player.jsx";
THREE.ColorManagement.legacyMode = false;

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });
const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" });
const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" });

const Bounds = ({ length = 5 }) => {
	return (
		<>
			<RigidBody type="fixed">
				<mesh
					position={[2.15, 0.75, -(length * -1.2) + 2]}
					geometry={boxGeometry}
					material={wallMaterial}
					scale={[0.3, 1.5, 4 * length]}
				/>
				<mesh
					position={[-2.15, 0.75, -(length * -1.2) + 2]}
					geometry={boxGeometry}
					material={wallMaterial}
					scale={[0.3, 1.5, 4 * length]}
				/>

				<mesh
					position={[0, 0.75, -(length * 0.8) + 2]}
					geometry={boxGeometry}
					material={wallMaterial}
					scale={[4, 1.5, 0.3]}
					receiveShadow
				/>
				<CuboidCollider args={[1, 1, 1]} />
			</RigidBody>
		</>
	);
};

const BlockStart = ({ position = [0, 0, 0] }) => {
	return (
		<group position={position}>
			<mesh
				geometry={boxGeometry}
				position={[0, -0.1, 0]}
				scale={[4, 0.2, 4]}
				receiveShadow
				material={floor1Material}
			/>
		</group>
	);
};

const BlockEnd = ({ position = [0, 0, 0] }) => {
	const hamburger = useGLTF("./hamburger.glb");

	return (
		<group position={position}>
			<mesh
				geometry={boxGeometry}
				position={[0, -0.1, 0]}
				scale={[4, 0.2, 4]}
				receiveShadow
				material={floor1Material}
			/>
			<primitive object={hamburger.scene} scale={0.2} />
		</group>
	);
};

const BlockSpinner = ({ position = [0, 0, 0] }) => {
	const obstacleRef = useRef();

	// For random speed of obstacles and direction.
	const [speed] = useState(
		() => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
	);

	return (
		<group position={position}>
			<mesh
				geometry={boxGeometry}
				material={floor2Material}
				position={[0, -0.1, 0]}
				scale={[4, 0.2, 4]}
				receiveShadow
			/>
			<mesh
				geometry={boxGeometry}
				material={obstacleMaterial}
				scale={[3.5, 0.3, 0.3]}
				receiveShadow
				castShadow
				ref={obstacleRef}
			/>
		</group>
	);
};

const BlockLimbo = ({ position = [0, 0, 0] }) => {
	const obstacleRef = useRef();

	// For random speed of obstacles and direction.
	const [speed] = useState(
		() => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
	);

	return (
		<group position={position}>
			<mesh
				geometry={boxGeometry}
				material={floor2Material}
				position={[0, -0.1, 0]}
				scale={[4, 0.2, 4]}
				receiveShadow
			/>
			<mesh
				geometry={boxGeometry}
				material={obstacleMaterial}
				scale={[3.5, 0.3, 0.3]}
				receiveShadow
				castShadow
				ref={obstacleRef}
			/>
		</group>
	);
};

const BlockAxe = ({ position = [0, 0, 0] }) => {
	const obstacleRef = useRef();

	// For random speed of obstacles and direction.
	const [speed] = useState(
		() => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
	);

	return (
		<group position={position}>
			<mesh
				geometry={boxGeometry}
				material={floor2Material}
				position={[0, -0.1, 0]}
				scale={[4, 0.2, 4]}
				receiveShadow
			/>

			{/* <RigidBody> */}
			<mesh
				geometry={boxGeometry}
				material={obstacleMaterial}
				scale={[3.5, 0.3, 0.3]}
				receiveShadow
				castShadow
				ref={obstacleRef}
			/>
			{/* </RigidBody> */}
		</group>
	);
};

const Experience = () => {
	{
		return (
			<>
				{/* SCENE UTILS */}
				<OrbitControls makeDefault />
				<Lights />

				{/* MESH */}
				<Physics>
					<Debug />
					<Bounds />
					<BlockStart position={[0, 0, 16]} />

					<BlockSpinner position={[0, 0, 12]} />

					<BlockLimbo position={[0, 0, 8]} />

					<BlockAxe position={[0, 0, 4]} />

					<BlockEnd position={[0, 0, 0]} />

					{/* PLAYER */}
					<Player />
				</Physics>
			</>
		);
	}
};

export default Experience;
