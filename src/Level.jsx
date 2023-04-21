import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
import { Float, Text, useGLTF } from "@react-three/drei";

THREE.ColorManagement.legacyMode = false;

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floor1Material = new THREE.MeshStandardMaterial({
	color: "#12e619",
	metalness: 0,
	roughness: 0,
});

export function BlockStart({ position = [0, 0, 0] }) {
	return (
		<group position={position}>
			<Float floatIntensity={0.25} rotationIntensity={0.25}>
				<Text
					font="/bebas-neue-v9-latin-regular.woff"
					scale={0.5}
					maxWidth={0.25}
					lineHeight={0.75}
					textAlign="right"
					position={[0.75, 0.65, 0]}
					rotation-y={-0.25}
				>
					Brad's Portfolio
					<meshBasicMaterial toneMapped={false} />
				</Text>
			</Float>
			<RigidBody type="fixed" restitution={0.2} friction={0}>
				<mesh
					geometry={boxGeometry}
					material={floor1Material}
					position={[0, -0.1, 0]}
					scale={[50, 0.2, 50]}
					receiveShadow
				/>
			</RigidBody>
		</group>
	);
}

export function Level() {
	return (
		<>
			<BlockStart position={[0, 0, 0]} />
			<BlockStart position={[4, 0, 4]} />
			<BlockStart position={[8, 0, 8]} />
		</>
	);
}
