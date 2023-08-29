"use client";
import { useEffect } from "react";
import { useProgress, Html } from "@react-three/drei";

const LoadingScreen = ({ loadingStarted, setLoadingStarted }) => {
	const { progress, total, loaded, item } = useProgress();

	useEffect(() => {
		if (progress === 100) {
			setTimeout(() => {
				setLoadingStarted(true);
			}, 500);
		}
	}, [progress, total, loaded, item]);

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
					className="absolute inset-0 w-full h-full object-cover z-10"
					src="/herobg.png"
					alt="loading screen"
				/>
				<div className="flex flex-col items-center text-white text-[2rem] z-10">
					<p>Welcome to Brad Babines' Immersive Experience</p>
					<p>Loading {progress.toFixed(0) + "%"} </p>
				</div>
			</div>
		</>
	);
};

export default LoadingScreen;
