"use client";

import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	KeyboardControls,
	Sky,
	Loader,
} from "@react-three/drei";
import {
	Physics,
	Debug,
	RigidBody,
	CuboidCollider,
	MeshCollider,
} from "@react-three/rapier";
import { LevaPanel, useControls } from "leva";

import Lights from "./Lights";
import LandPortals from "../../models/LandPortals";
import CharacterController from "../experience/CharacterController";
import PortfolioAvatar from "@/models/PortfolioAvatar";
import Clouds from "./Clouds";
import Terrain from "../../models/Terrain";
import LargeTerrain from "../../models/LargeTerrain";

//  Keyboard control preset
export const keyboardMap = [
	{ name: "forward", keys: ["ArrowUp", "KeyW"] },
	{ name: "backward", keys: ["ArrowDown", "KeyS"] },
	{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
	{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
	{ name: "jump", keys: ["Space"] },
	{ name: "run", keys: ["Shift"] },
];

export default function MyCanvas() {
	return (
		<>
			<Canvas
				camera={{
					fov: 45,
					near: 0.1,
					far: 1000,
					position: [30, 5, 25],
				}}
			>
				{/* <OrbitControls /> */}

				<Clouds />

				<Lights />
				<Sky
					distance={450000}
					sunPosition={[0, 1, 0]}
					inclination={0}
					azimuth={0.25}
				/>

				{/* <fog attach="fog" args={["white", 100, 300]} /> */}

				<Physics
				// debug
				>
					{/* Avatar */}
					<KeyboardControls map={keyboardMap}>
						<CharacterController />
					</KeyboardControls>

					{/* Scene */}
					<RigidBody type="fixed" friction={15}>
						{/* <LandPortals /> */}
					</RigidBody>

					<RigidBody type="fixed" friction={15}>
						{/* <Terrain position={[0, -5, 0]} scale={0.01} /> */}
						<MeshCollider
							type="trimesh"
							args={[20, 1, 20]}
							position={[0, -15, 0]}
						>
							<LargeTerrain position={[0, -15, 0]} scale={0.01} />
						</MeshCollider>
					</RigidBody>
				</Physics>
			</Canvas>

			<Loader
				dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`} // Text
				initialState={(active) => active} // Initial black out state
			/>
		</>
	);
}
