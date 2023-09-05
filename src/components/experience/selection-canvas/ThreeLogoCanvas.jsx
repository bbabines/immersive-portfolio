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

				<Text3D
					font="inter_Bold.json"
					position={[-25, -22, 7]}
					rotation={[0, 0.9, 0]}
					scale={8}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.02}
					bevelSize={0.02}
					bevelOffset={0}
					bevelSegments={5}
				>
					three.js
					<meshStandardMaterial />
				</Text3D>
			</Canvas>
		</>
	);
}
