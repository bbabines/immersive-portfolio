"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	Text,
	Text3D,
	PresentationControls,
	Html,
} from "@react-three/drei";

import Lights from "../Lights";
import Reactlogo from "../../../models/ReactLogo";

export default function ReactLogoCanvas() {
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
					<Reactlogo scale={5} />
				</PresentationControls>
			</Canvas>
			<p className="text-[3.5rem] font-bold text-[#61dbfb] relative left-[35%] bottom-[20%] select-none">
				React
			</p>
		</>
	);
}
