"use client";

import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	KeyboardControls,
	Loader,
	Sky,
} from "@react-three/drei";
import {
	Physics,
	Debug,
	RigidBody,
	CuboidCollider,
	MeshCollider,
} from "@react-three/rapier";

import Lights from "./Lights";
import TimeOfDay from "./TimeOfDay";
import CharacterController from "../experience/CharacterController";
import PortfolioAvatar from "@/models/PortfolioAvatar";
import LandPortals from "../../models/LandPortals";
import Terrain from "../../models/Terrain";
import MainPOI from "../../models/MainPOI";
import GenericPOI from "../../models/GenericPOI";

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

				{/* <TimeOfDay /> */}

				{/* Delete Lighjs and Sky when TimeOfDay is finished */}
				<Lights />
				<Sky />

				{/* <fog attach="fog" args={["white", 20, 300]} /> */}

				<Physics
				// debug
				// debug
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
						{/* <MeshCollider
							type="trimesh"
							args={[2, 1, 2]}
						> */}
						<Terrain position={[0, -1, 0]} scale={0.01} />
						{/* </MeshCollider> */}
					</RigidBody>

					{/* Delete once Terrain physics figured out */}
					<RigidBody type="fixed" friction={15}>
						<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
							<planeGeometry args={[500, 500]} />
							<meshStandardMaterial />
						</mesh>
					</RigidBody>

					<MainPOI scale={0.2} />
					<GenericPOI scale={0.2} />
				</Physics>
			</Canvas>

			<Loader
				dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`} // Text
				initialState={(active) => active} // Initial black out state
			/>
		</>
	);
}

// scale={0.01}
