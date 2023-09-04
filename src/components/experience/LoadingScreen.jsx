"use client";
import { useEffect, useState, useRef } from "react";
import { useProgress } from "@react-three/drei";

const LoadingScreen = ({ loadingStarted, setLoadingStarted }) => {
	const { progress, total, loaded, item } = useProgress();
	// const loadingAudio = new Audio("loadingAudio.mp3");
	// const [buttonClicked, setButtonClicked] = useState(false);

	useEffect(() => {
		if (progress === 100) {
			setTimeout(() => {
				setLoadingStarted(true);
			}, 500);
		}
	}, [progress, total, loaded, item]);

	// const handleButtonClick = () => {
	// 	setButtonClicked(true);
	// 	loadingAudio.play();
	// };

	return (
		<>
			<div
				className={`${
					loadingStarted
						? "hidden"
						: "fixed inset-0 flex items-center justify-center z-10"
				}`}
			>
				<img
					className="absolute inset-0 w-full h-full object-fit z-10"
					src="/loading-image.jpg"
					alt="loading screen"
				/>
				<div className="flex flex-col items-center text-white text-[2rem] z-10">
					<p className="text-white text-[0.75rem] z-20">
						Loading {progress.toFixed(0) + "%"}{" "}
					</p>
					<div className="w-[50%] h-[50px] flex items-center justify-center absolute bottom-[5%] z-20 bg-transparent">
						{/* Progress bar */}
						<div
							className="max-w-[90%] h-[43%] absolute top-[29%] left-[5%] inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 z-20 rounded-full max-xl:h-[20%]  max-lg:h-[15%] max-sm:h-[10%] max-lg:top-[45%] max-xl:top-[42%]"
							style={{ width: `${progress}%` }}
						></div>
						{/* Bar overlay */}
						<img
							src="/wow-loading.svg"
							alt="a loading bar"
							className="w-full z-30"
						/>
					</div>
					{/* Button to start playing audio */}
					{/* {!buttonClicked && (
						<button
							onClick={handleButtonClick}
							className="absolute inset-0 w-full h-full z-50"
						>
							Start Loading
						</button>
					)} */}
				</div>
			</div>
		</>
	);
};

export default LoadingScreen;
