"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	KeyboardControls,
	Sky,
	Loader,
} from "@react-three/drei";
import { Physics, Debug, RigidBody } from "@react-three/rapier";
import { LevaPanel, useControls } from "leva";

import ControllerOne from "./ControllerOne";
import Lights from "./Lights";
import LandPortals from "../../models/LandPortals";
import NewScene from "../../models/NewScene";

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
	//  Debug settings
	const { physics } = useControls("World Settings", {
		physics: true,
	});

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
				<OrbitControls />
				<Lights />
				<Sky
					distance={450000}
					sunPosition={[0, 1, 0]}
					inclination={0}
					azimuth={0.25}
				/>

				<Physics timeStep="vary" Debug={physics}>
					{/* <KeyboardControls map={keyboardMap}>
						<ControllerOne />
					</KeyboardControls> */}

					{/* Scene */}
					<RigidBody type="fixed">
						<LandPortals />
						{/* <NewScene /> */}
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
