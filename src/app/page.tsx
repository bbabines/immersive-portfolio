"use client";

import ModalContextProvider from "../components/context/ModalContext";
import HoverContextProvider from "../components/context/HoverContext";
import ProfileContextProvider from "../components/context/ProfileContext";
import MovementContextProvider from "../components/context/MovementContext";
import AnimationContextProvider from "../components/context/CharacterAnimationContext";

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
				<ProfileContextProvider>
					<MovementContextProvider>
						<AnimationContextProvider>
							<main className=" bg-[black] text-[#626565]  max-sm:flex max-sm:flex-col max-sm:justify-between">
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
											description="Ikon Clothing is a sprawling e-commerce clothing store application inspired by giants in the industry like Shopify. At its core, it harnesses the power of React to ensure a seamless, responsive, and interactive user experience. To complement its front-end capabilities, Ikon Clothing integrates Firebase, offering robust user authentication mechanisms and a reliable database structure, ensuring that every transaction is secure and every piece of data is stored with integrity."
											features="React Hooks, React Router, Context API, User Authentication, and Firebase."
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
											description="Dive into the magical realms of my RPG with a state-of-the-art Character Selection Screen built with React Three Fiber. Seamlessly blending the power of React's component-based architecture with the visually stunning capabilities of Three.js, this application offers both beauty and functionality."
											features="Asset Collection with Unity, Optimized Assets, 3D Modeling with Blender, State Management, Character Animations"
											img1="/rpg.png"
											stack="Next.js, React Three Fiber, and React."
											liveLink="https://mmorpg-character-selection.netlify.app/"
											githubLink="https://github.com/bbabines/character-selection"
										/>
									</div>

									{/* Three.js Modal 2 */}
									<div className="z-[2] mx-auto">
										<ProjectModal
											signType="three-two"
											title="Marble Madness"
											description="Marble Madness invites players to try an immersive mini-game, where they take control of a marble, navigating it through a maze of challenges and obstacles. This isn't just about precision, but also about speed. As soon as the game begins, a timer starts ticking, urging players to race to the finish line as swiftly as they can. And if you think you can do better? A convenient restart button awaits at the end, tempting you to shave off those few extra seconds."
											features="Physics, Character Controller, Camera Animation, Game Mechanics, and Post-Processing."
											img1="/marble.png"
											stack="React Three Fiber, React, and Zustand."
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
									<div className="absolute z-[0] h-[100vh] w-[100vw] top-0 left-0">
										<Canvas />
									</div>
								</div>
							</main>
						</AnimationContextProvider>
					</MovementContextProvider>
				</ProfileContextProvider>
			</HoverContextProvider>
		</ModalContextProvider>
	);
}
