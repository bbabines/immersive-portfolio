"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, KeyboardControls, Sky } from "@react-three/drei";
import { Physics, Debug, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";

import Lights from "./Lights";
import TimeOfDay from "./TimeOfDay";
import CharacterController from "../experience/CharacterController";
import MainPOI from "../../models/MainPOI";
import GenericPOI from "../../models/GenericPOI";
import Mailbox from "../../models/Mailbox";
import LoadingScreen from "../experience/LoadingScreen";
import Terrain from "../../models/Terrain";

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

			{/* Sceen Overlays */}
			{loadingStarted && (
				<>
					{/* Keyboard Control Image */}
					<div className="absolute z-[1] bottom-[10%] left-[5%]">
						<img
							src="keyControls.png"
							alt="keyboard controls"
							className="h-[100px]"
						/>
					</div>

					{/* Profile Image */}
					<div className="h-[50px] w-[50px]   bg-white bg-opacity-30 absolute z-[1] bottom-[10%] right-[5%] text-white font-bold">
						<div className="h-[50px] w-[50px] flex justify-center items-center opacity-100 z-[2] text-[white] border-2  rounded-lg">
							P
						</div>
						<div className="font-thin opacity-80">Profile</div>
					</div>
				</>
			)}

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
						{/* <OrbitControls /> */}

						<fog attach="fog" args={["white", 20, 200]} />

						<Physics
							gravity={[0, -50, 0]}
							// debug
						>
							<KeyboardControls map={keyboardMap}>
								{/* Avatar */}
								<CharacterController />
							</KeyboardControls>

							{/* Land */}
							<RigidBody type="fixed" colliders="trimesh" friction={2}>
								<Terrain
									position={[0, -1, 0]}
									scale={0.6}
									friction={1000}
									restitution={0}
								/>
							</RigidBody>

							<MainPOI scale={0.2} />
							<Mailbox position={[0, -0.5, -16.5]} scale={0.25} />
							{/* <GenericPOI scale={0.2} /> */}
						</Physics>
					</>
				)}
			</Canvas>
		</>
	);
}
