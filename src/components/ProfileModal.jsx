import React, { useState, useEffect } from "react";

import { useProfileContext } from "./ProfileContext";

const ShowProfile = () => {
	const { showProfile, setShowProfile } = useProfileContext();

	const handleShowProfile = (event) => {
		if (event.key === "p") {
			setShowProfile((prevState) => !prevState);
		}
	};

	const handleProfileClose = () => {
		setShowProfile(false);
	};

	useEffect(() => {
		window.addEventListener("keydown", handleShowProfile);
		return () => {
			window.removeEventListener("keydown", handleShowProfile);
		};
	}, []);

	return (
		<div
			className={
				showProfile === true
					? "max-w-[1500px] max-h-[95vh] w-[50vw] overflow-auto  text-white bg-[#161d26] bg-opacity-90 rounded-2xl max-lg:w-[100%]"
					: "hidden"
			}
		>
			<div className="relative">
				<div
					className="w-[2em] h-[2em] flex justify-center items-center bg-white text-black rounded-full mt-2 absolute left-[93%] top-[2%] cursor-pointer max-sm:left-[90%]"
					onClick={handleProfileClose}
				>
					X
				</div>

				{/* Information */}
				<div className="py-4 flex flex-col justify-center items-center">
					<h1 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#eab832]">
						Profile
					</h1>
					<p className="b-4 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
						Where Passion Meets Profession
					</p>

					<div className="w-[95%] p-4 m-4 flex justify-between bg-[#0b1015] rounded-lg">
						<div className="">
							<hr className="mb-2 opacity-50" />
							<p className="font-medium">Brad Babines</p>
							<p className="text-[lightgrey]">Front End Developer</p>
							<hr className="mt-2 opacity-50" />
						</div>
						<div className="w-[200px] flex flex-col justify-between">
							<p className="mr-2">
								Years of Experience:{" "}
								<span className="text-[lightgreen]">2</span>
							</p>

							<div className="flex">
								Resume:
								<a
									href="resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="ml-2"
								>
									<img
										src="resume-icon.png"
										alt="icon thumbnail"
										className="h-[25px]"
									/>
								</a>
							</div>
						</div>
					</div>

					<p className="ml-10 mb-2 self-start">Developer Information</p>
					<div className="w-[95%] p-4 flex flex-wrap justify-center bg-[#0b1015] rounded-lg">
						{/* Language Container */}
						<div className="w-[250px] mx-auto p-4 m-4 bg-[#0b1015] rounded-lg border">
							<div className="pr-4">
								<div className="mb-4 font-thin">Languages</div>

								<div className="flex items-center">
									<img
										src="next.webp"
										alt="icon thumbnail"
										className="h-[25px] mr-2 rounded-full"
									/>
									<p className="my-1">Next.js</p>
								</div>

								<div className="flex items-center">
									<img
										src="typescript.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2 rounded-full"
									/>
									<p className="my-1">Typescript</p>
								</div>

								<div className="flex items-center">
									<img
										src="react.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="my-1">React</p>
								</div>

								<div className="flex items-center">
									<img
										src="threejs.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2 text-white"
									/>
									<p className="my-1 text-[0.85rem]">React Three Fiber</p>
								</div>

								<div className="flex items-center">
									<img
										src="javascript.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="mt-1">Javascript</p>
								</div>

								<div className="flex items-center">
									<img
										src="threejs.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="my-1">three.js</p>
								</div>

								<div className="flex items-center">
									<img
										src="tailwind.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="my-1">Tailwind</p>
								</div>
							</div>
						</div>

						{/* Vertical Line */}
						<div className="h-[295px] mx-auto my-5 border-l opacity-50 max-2xl:hidden max-lg:hidden"></div>

						{/* Tool Container */}
						<div className="w-[250px] mx-auto p-4 m-4 bg-[#0b1015] rounded-lg border">
							<div className="pr-4">
								<div className="mb-4 font-thin">Tools</div>
								<div className="w-[100px] flex items-center">
									<img
										src="tool.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="my-1">GitHub</p>
								</div>
								<div className="flex items-center">
									<img
										src="tool.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="my-1">Trello</p>
								</div>
								<div className="flex items-center">
									<img
										src="tool.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="my-1">Jira</p>
								</div>
								<div className="flex items-center">
									<img
										src="tool.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="my-1 text-[0.85rem]">Figma</p>
								</div>
								<div className="flex items-center">
									<img
										src="tool.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="my-1">Rest API</p>
								</div>
								<div className="flex items-center">
									<img
										src="tool.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="my-1">Firebase</p>
								</div>
								<div className="flex items-center">
									<img
										src="tool.png"
										alt="icon thumbnail"
										className="h-[25px] mr-2"
									/>
									<p className="mt-1">Framer Motion</p>
								</div>
							</div>
						</div>

						{/* Vertical Line */}
						<div className="h-[295px] mx-auto my-5 border-l opacity-50 max-2xl:hidden"></div>

						{/* Skill Container */}
						<div className="w-[250px] p-4 m-4 bg-[#0b1015] rounded-lg border">
							<div className="pr-4">
								<div className="mb-4 font-thin">Skills</div>

								<div className="w-[150px] flex items-center">
									<img
										src="checkmark.png"
										alt="icon thumbnail"
										className="h-[15px] mr-2"
									/>
									<p className="my-1 text-[0.95rem]">React Proficiency</p>
								</div>

								<div className="flex items-center">
									<img
										src="checkmark.png"
										alt="icon thumbnail"
										className="h-[15px] mr-2"
									/>
									<p className="my-1 text-[0.85rem]">Component Architecture</p>
								</div>

								<div className="flex items-center">
									<img
										src="checkmark.png"
										alt="icon thumbnail"
										className="h-[15px] mr-2"
									/>
									<p className="my-1">State Management</p>
								</div>

								<div className="flex items-center">
									<img
										src="checkmark.png"
										alt="icon thumbnail"
										className="h-[15px] mr-2"
									/>
									<p className="my-1">Soft Skills</p>
								</div>

								<div className="flex items-center">
									<img
										src="checkmark.png"
										alt="icon thumbnail"
										className="h-[15px] mr-2"
									/>
									<p className="my-1">Version Control</p>
								</div>

								<div className="flex items-center">
									<img
										src="checkmark.png"
										alt="icon thumbnail"
										className="h-[15px] mr-2"
									/>
									<p className="my-1">Agile/Scrum</p>
								</div>

								<div className="flex items-center">
									<img
										src="checkmark.png"
										alt="icon thumbnail"
										className="h-[15px] mr-2"
									/>
									<p className="mt-1">Continuous Learning</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowProfile;
