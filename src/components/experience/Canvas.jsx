"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, KeyboardControls, Sky } from "@react-three/drei";
import { Physics, Debug, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";

import Lights from "./Lights";
import TimeOfDay from "./TimeOfDay";
import CharacterController from "../experience/CharacterController";
import Terrain from "../../models/Terrain";
import MainPOI from "../../models/MainPOI";
import GenericPOI from "../../models/GenericPOI";
import Mailbox from "../../models/Mailbox";
import LoadingScreen from "../experience/LoadingScreen";

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
	const [loadingStarted, setLoadingStarted] = useState(false);

	return (
		<>
			<LoadingScreen
				loadingStarted={loadingStarted}
				setLoadingStarted={setLoadingStarted}
			/>
			<Canvas
				camera={{
					fov: 45,
					near: 0.1,
					far: 1000,
					position: [30, 5, 25],
				}}
			>
				{loadingStarted && (
					<>
						{/* <TimeOfDay /> */}

						{/* Delete Lights and Sky when TimeOfDay is finished */}
						<Lights />
						<Sky />
						<Perf position="top-left" />

						<fog attach="fog" args={["white", 20, 200]} />

						<Physics
						// debug
						// debug
						// debug
						>
							{/* Avatar */}
							<KeyboardControls map={keyboardMap}>
								<CharacterController />
							</KeyboardControls>

							<RigidBody type="fixed" friction={15} includeInvisible>
								<mesh
									rotation={[-Math.PI / 2, 0, 0]}
									position={[0, 0, 0]}
									visible={false}
								>
									<planeGeometry args={[300, 300]} />
									<meshStandardMaterial />
								</mesh>
							</RigidBody>

							{/* <RigidBody type="fixed" friction={15}> */}
							<Terrain position={[0, -1, 0]} scale={0.01} />
							{/* </RigidBody> */}

							{/* POI */}
							<MainPOI scale={0.2} />
							<Mailbox position={[0, -0.5, -16.5]} scale={0.25} />
							<GenericPOI scale={0.2} />
						</Physics>
					</>
				)}
			</Canvas>
		</>
	);
}
