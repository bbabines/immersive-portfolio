"use client";

import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, KeyboardControls, Loader } from "@react-three/drei";
import {
	Physics,
	Debug,
	RigidBody,
	CuboidCollider,
	MeshCollider,
} from "@react-three/rapier";

import Lights from "./Lights";
import LandPortals from "../../models/LandPortals";
import CharacterController from "../experience/CharacterController";
import PortfolioAvatar from "@/models/PortfolioAvatar";
import LargeTerrain from "../../models/LargeTerrain";
import TimeOfDay from "./TimeOfDay";

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

				<TimeOfDay />

				{/* Pass time of day and change intensity to 0.5 at night */}
				<Lights />

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
						<MeshCollider
							type="trimesh"
							args={[20, 1, 20]}
							position={[0, -15, 0]}
						>
							<LargeTerrain position={[0, -1, 0]} scale={0.01} />
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
