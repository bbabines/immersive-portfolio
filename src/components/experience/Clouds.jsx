import React, { useMemo } from "react";
import { Cloud } from "@react-three/drei";

const NUM_CLOUDS = 5;

function generateRandom(min, max) {
	return Math.random() * (max - min) + min;
}

export default function Clouds() {
	const clouds = useMemo(() => {
		return Array.from({ length: NUM_CLOUDS }).map((_, index) => (
			<Cloud
				key={index}
				opacity={generateRandom(0.1, 0.2)}
				speed={generateRandom(0.05, 0.15)}
				width={generateRandom(80, 150)}
				depth={generateRandom(3, 6)}
				segments={200}
				position={[
					generateRandom(-500, 500),
					generateRandom(100, 150),
					generateRandom(-500, 500),
				]}
			/>
		));
	}, []); // Empty dependency array means this useMemo will only run once.

	return <>{clouds}</>;
}
