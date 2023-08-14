"use client";

import Canvas from "@/components/experience/Canvas";
import ShowProfile from "../components/ShowProfile";

export default function App() {
	return (
		<main className=" bg-[black] text-[#626565] min-h-[100vh] max-sm:flex max-sm:flex-col max-sm:justify-between">
			<div className="min-h-[100vh] max-h-[100%] flex flex-col justify-center">
				<div className="z-[2] mx-auto">
					<ShowProfile />
				</div>

				<div className="absolute z-[0] h-[100%] w-[100%]">
					<Canvas />
				</div>

				<div className="absolute z-[1] bottom-[10%] left-[5%]">
					<img
						src="keyControls.png"
						alt="keyboard controls"
						className="h-[100px]"
					/>
				</div>
			</div>
		</main>
	);
}
