"use client";

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
import Land from "../../models/Land";

export const keyboardMap = [
	{ name: "forward", keys: ["ArrowUp", "KeyW"] },
	{ name: "backward", keys: ["ArrowDown", "KeyS"] },
	{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
	{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
	{ name: "jump", keys: ["Space"] },
	{ name: "run", keys: ["Shift"] },
];

export default function MyCanvas() {
	/**
	 * Keyboard control preset
	 */

	/**
	 * Debug settings
	 */
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
					// position: [0, 2, 6],
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
					{/* <Debug /> */}

					{/* <KeyboardControls map={keyboardMap}>
						<ControllerOne />
					</KeyboardControls> */}

					{/* Floor */}
					<RigidBody type="fixed">
						<mesh receiveShadow position={[0, -1.25, 0]}>
							<boxGeometry args={[300, 0.5, 300]} />
							<meshStandardMaterial color="lightgreen" />
						</mesh>
					</RigidBody>

					{/* Scene */}
					<RigidBody type="fixed">
						<Land />
					</RigidBody>
				</Physics>
			</Canvas>

			<Loader
				// containerStyles={...container} // Flex layout styles
				// innerStyles={...inner} // Inner container styles
				// barStyles={...bar} // Loading-bar styles
				// dataStyles={...data} // Text styles
				dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`} // Text
				initialState={(active) => active} // Initial black out state
			/>
		</>
	);
}
