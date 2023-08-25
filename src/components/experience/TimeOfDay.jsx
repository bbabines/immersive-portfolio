import { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Sky, Stars } from "@react-three/drei";

import Lights from "./Lights";
import Clouds from "./Clouds";

const TimeOfDay = () => {
	const dayAudioRef = useRef(new Audio("dayAudio.mp3"));
	const nightAudioRef = useRef(new Audio("nightSounds.mp3"));

	// Debug
	const sunPosition = useControls({
		levaSunPosition: {
			value: { x: 0, y: 1 },
			min: { x: -10, y: -10 },
			max: { x: 20, y: 20 },
			step: 0.1,
			joystick: "invertY",
		},
	});

	const [timeOfDay, setTimeOfDay] = useState("Day");
	const elapsedTimeRef = useRef(0); // Keep track of elapsed time
	const sunPositionByTime = {
		Dawn: { x: 6.5, y: -0.1 },
		Morning: { x: 6.5, y: 0.5 },
		Day: { x: 3, y: 8 },
		Dusk: { x: -6.5, y: 0.0 },
		Night: { x: -10, y: -10 },
	};

	// Sounds via https://pixabay.com/sound-effects/search

	// useEffect(() => {
	// 	const dayAudio = new Audio("dayAudio.mp3");
	// 	const nightAudio = new Audio("nightSounds.mp3");

	// 	if (timeOfDay === "Day") {
	// 		dayAudio.play();
	// 	} else if (timeOfDay === "Dusk") {
	// 		nightAudio.play();
	// 	} else if (timeOfDay === "Night") {
	// 		dayAudio.pause();
	// 	} else if (timeOfDay === "Dawn") {
	// 		dayAudio.play();
	// 	} else if (timeOfDay === "Morning") {
	// 		nightAudio.pause();
	// 	}
	// }, [timeOfDay]);

	useEffect(() => {
		if (timeOfDay === "Day") {
			dayAudioRef.current.play();
			nightAudioRef.current.pause();
			nightAudioRef.current.currentTime = 0;
		} else if (timeOfDay === "Dusk") {
			nightAudioRef.current.play();
			// dayAudioRef.current.pause();
			dayAudioRef.current.currentTime = 0;
		} else if (timeOfDay === "Night") {
			dayAudioRef.current.pause();
		} else if (timeOfDay === "Dawn") {
			dayAudioRef.current.play();
			// nightAudioRef.current.pause();
			nightAudioRef.current.currentTime = 0;
		} else if (timeOfDay === "Morning") {
			nightAudioRef.current.pause();
			// dayAudioRef.current.play();
			// dayAudioRef.current.currentTime = 0;
		}
	}, [timeOfDay]);

	// console.log(timeOfDay);

	useFrame((state, delta) => {
		elapsedTimeRef.current += delta; // Increment the elapsed time

		if (elapsedTimeRef.current > 24) {
			// Reset after a day
			elapsedTimeRef.current = 0;
		}

		// Define time periods, you can adjust as needed
		if (elapsedTimeRef.current < 6) {
			setTimeOfDay("Dawn");
		} else if (elapsedTimeRef.current < 10) {
			setTimeOfDay("Morning");
		} else if (elapsedTimeRef.current < 14) {
			setTimeOfDay("Day");
		} else if (elapsedTimeRef.current < 16) {
			setTimeOfDay("Dusk");
		} else if (elapsedTimeRef.current < 18) {
			setTimeOfDay("Night");
		}

		// Lerp for smoother transitions
		let currentPos = sunPosition.levaSunPosition;
		let targetPos = sunPositionByTime[timeOfDay];
		sunPosition.levaSunPosition.x += (targetPos.x - currentPos.x) * 0.1;
		sunPosition.levaSunPosition.y += (targetPos.y - currentPos.y) * 0.1;
	});

	// Render stars or clouds based on timeOfDay
	let renderConditionals = null;

	if (timeOfDay === "Night" || timeOfDay === "Dusk") {
		renderConditionals = <Stars />;
	} else if (timeOfDay === "Morning" || timeOfDay === "Day") {
		renderConditionals = <Clouds />;
	}

	return (
		<>
			<Lights timeOfDay={timeOfDay} />

			<Sky
				distance={450000}
				inclination={0}
				azimuth={0.25}
				sunPosition={[
					sunPosition.levaSunPosition.x,
					sunPosition.levaSunPosition.y,
					0,
				]}
			/>

			{/* Render Clouds & Stars Based on Time */}
			{renderConditionals}
		</>
	);
};

export default TimeOfDay;
