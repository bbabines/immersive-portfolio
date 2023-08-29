"use client";

import ModalContextProvider from "../components/ModalContext";
import HoverContextProvider from "../components/HoverContext";
import Canvas from "@/components/experience/Canvas";
import ProfileModal from "../components/ProfileModal";
import ProjectModal from "../components/ProjectModal";
import AboutModal from "../components/AboutModal";
import ContactModal from "../components/ContactModal";
import MultiProjectModal from "../components/MultiProjectModal";

export default function App() {
	return (
		<ModalContextProvider>
			<HoverContextProvider>
				<main className=" bg-[black] text-[#626565] min-h-[100vh] max-sm:flex max-sm:flex-col max-sm:justify-between">
					<div className="min-h-[100vh] max-h-[100%] flex flex-col justify-center">
						{/* Profile Modal */}
						<div className="z-[2] mx-auto">
							<ProfileModal />
						</div>

						{/* Contact Modal */}
						<div className="z-[2] mx-auto">
							<div className="z-[2] mx-auto">
								<ContactModal signType={"contact"} />
							</div>
						</div>

						{/* React Modal 1 */}
						<div className="z-[2] mx-auto">
							<ProjectModal
								signType="react-one"
								title="Kubera Link"
								description="Kubera Link is a large freelance project for a startup to build an MVP for their crypto call channel SPA. The project team included a PM, BA, UI/UX designer, a senior backend developer, and myself as a frontend developer. Github, Jira, and Slack were utilized for DevOps."
								features="OAuth, Stripe Integration, Asset Uploads, Pagination, and a User Dashboard."
								img1="/kubera.png"
								stack="Next.js, Typescript, React, and TailwindCSS."
								liveLink="http://www.kuberalink.com"
								githubLink="https://github.com/KuberaLink/KuberaLink"
							/>
						</div>

						{/* React Modal 2 */}
						<div className="z-[2] mx-auto">
							<ProjectModal
								signType="react-two"
								title="Ikon Clothing"
								description="This is an e-commerce clothing store made with React that has user authentication/database support via firebase."
								features="User Authentication and Firebase."
								img1="/ikon.png"
								stack="React, React Router, and Styled Components."
								liveLink="https://ikon-clothing.netlify.app/"
								githubLink="https://github.com/bbabines/brads-clothing"
							/>
						</div>

						{/* Three.js Modal 1 */}
						<div className="z-[2] mx-auto">
							<ProjectModal
								signType="three-one"
								title="Legends of Aetheria"
								description="This is the start of an action combat MMORPG. Currently, it is a character selection screen which will load into a multiplayer area."
								features="3D Animations, Shaders (GLSL), and Multiplayer Functionality"
								img1="/rpg.png"
								stack="Next.js, React, React Three Fiber, and Socket.io."
								liveLink="https://mmorpg-character-selection.netlify.app/"
								githubLink="https://github.com/bbabines/character-selection"
							/>
						</div>

						{/* Three.js Modal 2 */}
						<div className="z-[2] mx-auto">
							<ProjectModal
								signType="three-two"
								title="Marble Madness"
								description="An immersive mini-game navigating a marble to the finish line in the shortest time possible."
								features="Character Controller, Respawning, and Post-Processing."
								img1="/marble.png"
								stack="React Three Fiber, React, and Zustand"
								liveLink="https://marble-madness.netlify.app/"
								githubLink="https://github.com/bbabines/marble-madness"
							/>
						</div>

						{/* Misc Project Modal */}
						<div className="z-[2] mx-auto">
							<MultiProjectModal
								signType="all-projects"
								title="More Projects"
							/>
						</div>

						{/* About Modal */}
						<div className="z-[2] mx-auto">
							<AboutModal signType={"about"} />
						</div>

						{/* MyCanvas */}
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

						<div className="h-[50px] w-[50px]   bg-white bg-opacity-30 absolute z-[1] bottom-[10%] right-[5%] text-white font-bold">
							<div className="h-[50px] w-[50px] flex justify-center items-center opacity-100 z-[2] text-[white] border-2  rounded-lg">
								P
							</div>
							<div className="font-thin opacity-80">Profile</div>
						</div>
					</div>
				</main>
			</HoverContextProvider>
		</ModalContextProvider>
	);
}
