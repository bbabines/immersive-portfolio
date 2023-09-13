"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Sky } from "@react-three/drei";
import { Physics, Debug, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { Joystick } from "react-joystick-component";

import Lights from "./Lights";
import CharacterController from "../experience/CharacterController";
import MainPOI from "../../models/MainPOI";
import Mailbox from "../../models/Mailbox";
import LoadingScreen from "../experience/LoadingScreen";
import Terrain from "../../models/Terrain";
import TimeOfDay from "./TimeOfDay";

import { useProfileContext } from "../context/ProfileContext";

//  Keyboard control preset
export const keyboardMap = [
	{ name: "forward", keys: ["ArrowUp", "KeyW"] },
	{ name: "backward", keys: ["ArrowDown", "KeyS"] },
	{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
	{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
	{ name: "jump", keys: ["Space"] },
	{ name: "run", keys: ["ShiftLeft", "ShiftRight"] },
];

export default function MyCanvas() {
	const { showProfile, setShowProfile } = useProfileContext();

	const [loadingStarted, setLoadingStarted] = useState(false);
	const [joystickDirection, setJoystickDirection] = useState({
		leftwardJoystick: false,
		rightwardJoystick: false,
		forwardJoystick: false,
		backwardJoystick: false,
		isRunningJoystick: false,
	});

	const handleJoystickMove = (pos) => {
		const isRunningThreshold = 0.4; // Adjust value based on sensitivity of the joystick grid
		const isRunningJoystick =
			Math.abs(pos.x) > isRunningThreshold ||
			Math.abs(pos.y) > isRunningThreshold;

		setJoystickDirection({
			leftwardJoystick: pos.x < 0.0,
			rightwardJoystick: pos.x > 0.01,
			forwardJoystick: pos.y > 0.0,
			backwardJoystick: pos.y < 0.01,
			isRunningJoystick,
		});
	};

	const handleJoystickEnd = () => {
		setJoystickDirection({
			leftwardJoystick: false,
			rightwardJoystick: false,
			forwardJoystick: false,
			backwardJoystick: false,
			isRunningJoystick: false,
		});
	};

	return (
		<>
			<LoadingScreen
				loadingStarted={loadingStarted}
				setLoadingStarted={setLoadingStarted}
			/>

			{/* Screen Overlays */}
			{loadingStarted && (
				<>
					{/* Keyboard Control Image */}
					<div
						className="absolute z-[1] bottom-[10%] left-[5%] max-sm:hidden"
						style={{ userSelect: "none" }}
					>
						<img
							src="keyControls.png"
							alt="keyboard controls"
							className="h-[100px]"
						/>
					</div>

					<div className="absolute bottom-[12%] left-[50%] z-[20] sm:hidden">
						<Joystick
							size={70}
							baseColor="rgba(255,255,255, 0.5)"
							stickColor="rgba(255,255,255, 0.8)"
							move={handleJoystickMove}
							stop={handleJoystickEnd}
						/>
					</div>

					{/* Profile Image */}
					<div
						className="h-[50px] w-[50px] bg-white bg-opacity-30 absolute z-[1] bottom-[10%] right-[5%] text-white font-bold max-sm:cursor-pointer max-sm:bottom-[50%] max-sm:w-[75px] max-sm:rounded-lg  max-sm:bg-[#eab832] max-sm:bg-opacity-50 max-sm:hover:bg-opacity-80"
						style={{ userSelect: "none" }}
						onClick={() => setShowProfile(true)}
					>
						<div className="h-[50px] w-[50px] flex justify-center items-center opacity-100 z-[2] text-[white] border-2  rounded-lg max-sm:hidden">
							P
						</div>
						<div className="font-thin opacity-80 max-sm:font-bold max-sm:my-3 max-sm:mx-3 max-sm:hover:opacity-100">
							Profile
						</div>
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
						{/* <TimeOfDay />  */}

						{/* Delete Lights and Sky when TimeOfDay is finished */}
						<Lights />
						<Sky />
						{/* <Perf position="top-left" /> */}

						<fog attach="fog" args={["white", 20, 200]} />

						<Physics
							gravity={[0, -50, 0]}
							// debug
						>
							<KeyboardControls map={keyboardMap}>
								<CharacterController moveData={joystickDirection} />
							</KeyboardControls>

							{/* Land */}
							<RigidBody type="fixed" colliders="trimesh" friction={2}>
								<Terrain
									position={[0, -1, 0]}
									scale={0.38}
									friction={1000}
									restitution={0}
								/>
							</RigidBody>

							<MainPOI scale={0.2} />
							<Mailbox scale={0.1} />
						</Physics>
					</>
				)}
			</Canvas>
		</>
	);
}
