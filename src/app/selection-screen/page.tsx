import React from "react";

const SelectionScreen = () => {
	return (
		<div className="min-h-[100vh] bg-[black] relative ">
			<h2 className="py-8 text-[4rem] text-white text-center">
				Choose Your Experience
			</h2>

			<div className="items-center justify-center flex gap-[10em]">
				{/* Classic Website */}
				<div className="py-4 flex flex-col justify-center items-center">
					<h3 className="py-4 text-[2rem] text-[#eab832]">Classic Website</h3>
					<div className="flex flex-wrap justify-center items-center gap-4 ">
						<div className="w-[300px] p-4 mb-4 bg-[#151030] rounded-2xl ">
							<div>
								<div className="flex items-center justify-center max-h-[150px]">
									<img
										src="/rpg.png"
										alt="thumbnail of the project"
										className=" h-[150px] object-contain rounded-2xl"
									/>
								</div>
								<p className="font-light text-[0.95rem] text-white">
									This is a classic website experience with some 3D components.
								</p>
								<div className="my-2 flex justify-center">
									<p className="mx-2 blue-text-gradient">Next.js</p>
									<p className="mx-2 green-text-gradient">Typescript</p>
									<p className="mx-2 pink-text-gradient">React</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Immersive Experience */}
				<div className="py-4 flex flex-col justify-center items-center">
					<h3 className="py-4 text-[2rem] text-[#eab832]">
						Immersive Experience
					</h3>
					<div className="flex flex-wrap justify-center items-center gap-4">
						<div className="w-[300px] p-4 mb-4 bg-[#151030] rounded-2xl">
							<div>
								<div className="flex items-center justify-center max-h-[150px]">
									<img
										src="/rpg.png"
										alt="thumbnail of the project"
										className=" h-[150px] object-contain rounded-2xl"
									/>
								</div>
								<p className="font-light text-[0.95rem] text-white">
									This is a fully immersive experience where you control an
									avatar and interaction with the environment.
								</p>
								<div className="my-2 flex justify-center">
									<p className="mx-2 blue-text-gradient">Next.js</p>
									<p className="mx-2 green-text-gradient">React Three Fiber</p>
									<p className="mx-2 pink-text-gradient">React</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectionScreen;
