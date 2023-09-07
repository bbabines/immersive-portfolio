"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	Text,
	Text3D,
	PresentationControls,
} from "@react-three/drei";

import Lights from "../../experience/Lights";
import ThreeLogo from "../../../models/ThreeLogo";

export default function SelectionCanvas() {
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
				<Lights />
				{/* <OrbitControls autoRotate /> */}
				<PresentationControls
					global
					polar={[0, 0]} // Vertical limits
					azimuth={[-Infinity, Infinity]} // Horizontal limits
				>
					<ThreeLogo scale={0.2} />
				</PresentationControls>
			</Canvas>
			<p className="w-[250px] text-[3.5rem] font-bold text-[white] relative left-[30%] bottom-[20%] select-none ">
				three.js
			</p>
		</>
	);
}
