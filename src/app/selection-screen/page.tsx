import React from "react";

const SelectionScreen = () => {
	return (
		<div className="min-h-[100vh] bg-[black]">
			<h2 className="pt-[1em] text-[4rem] text-white text-center">
				Choose Your Experience
			</h2>

			<div className="min-h-[80vh] flex flex-wrap justify-center">
				{/* Classic Website */}
				<div className="mr-8 py-4 flex flex-col justify-center items-center  max-lg:mx-auto">
					<h3 className="py-4 text-[2rem] text-[#eab832]">Classic Website</h3>
					<a href="https://brads-portfolio.netlify.app/" target="_blank">
						<div className="h-[95%] flex flex-wrap justify-center items-center cursor-pointer shadow-md transition-transform duration-500 hover:shadow-leftGlow rounded-2xl">
							<div className="w-[300px] h-[350px] p-4 mb-4 bg-[#16171e] rounded-2xl ">
								<div>
									<div className="flex items-center justify-center max-h-[150px]">
										<img
											src="/react-portfolio.png"
											alt="thumbnail of the project"
											className=" h-[150px] object-contain rounded-2xl"
										/>
									</div>

									<div className="min-h-[170px] max-h-[100%] flex flex-col justify-around ">
										<p className="font-light text-[0.95rem] text-white">
											Dive into a straightforward and elegant web experience
											with my classic website. Tailored for those who value
											simplicity and functionality, this option offers a
											traditional yet refined layout.
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
					</a>
				</div>

				{/* Immersive Experience */}
				<div className="mr-8 py-4 flex flex-col justify-center items-center  max-lg:mx-auto">
					<h3 className="py-4 text-[2rem] text-[#eab832]">3D Experience</h3>
					<a href="https://immersive-portfolio.netlify.app/" target="_blank">
						<div className="h-[95%] flex flex-wrap justify-center items-center cursor-pointer shadow-md transition-transform duration-500 hover:shadow-rightGlow rounded-2xl">
							<div className="w-[300px] h-[350px] p-4 mb-4 bg-[#16171e] rounded-2xl ">
								<div>
									<div className="flex items-center justify-center max-h-[150px]">
										<img
											src="/r3f-portfolio.png"
											alt="thumbnail of the project"
											className=" h-[150px] object-contain rounded-2xl"
										/>
									</div>

									<div className="min-h-[170px] max-h-[100%] flex flex-col justify-around ">
										<p className="font-light text-[0.95rem] text-white">
											Step into a new dimension of interactivity with my 3D
											immersive site. Designed for the curious and the
											adventurous, this experience envelops you in a rich,
											dynamic environment.
										</p>
										<div className="my-2 flex justify-center">
											<p className="mx-2 blue-text-gradient">Next.js</p>
											<p className="mx-2 green-text-gradient">
												React Three Fiber
											</p>
											<p className="mx-2 pink-text-gradient">React</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default SelectionScreen;
