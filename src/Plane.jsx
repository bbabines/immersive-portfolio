import { RigidBody } from "@react-three/rapier";

export default function Plane({ color, position }) {
	return (
		<group>
			<RigidBody type="fixed" restitution={0.2} friction={0} receiveShadow>
				<mesh
					scale={[50, 20, 50]}
					receiveShadow
					position={position}
					rotation-x={-Math.PI * 0.5}
				>
					<planeGeometry />
					<meshBasicMaterial color={color} />
				</mesh>
			</RigidBody>
		</group>
	);
}
