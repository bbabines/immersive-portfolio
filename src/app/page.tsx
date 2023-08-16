"use client";

import ModalContextProvider from "../components/ModalContext";
import HoverContextProvider from "../components/HoverContext";
import Canvas from "@/components/experience/Canvas";
import ShowProfile from "../components/ShowProfile";
import ProjectModal from "../components/ProjectModal";
import AboutModal from "../components/AboutModal";
import ContactModal from "../components/ContactModal";

export default function App() {
	return (
		<ModalContextProvider>
			<HoverContextProvider>
				<main className=" bg-[black] text-[#626565] min-h-[100vh] max-sm:flex max-sm:flex-col max-sm:justify-between">
					<div className="min-h-[100vh] max-h-[100%] flex flex-col justify-center">
						<div className="z-[2] mx-auto">
							<ShowProfile />
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
								img2="/kubera2.png"
								stack="Next.js, Typescript, React, and TailwindCSS."
								liveLink="http://www.kuberalink.com"
								githubLink="https://github.com/KuberaLink/KuberaLink"
							/>
						</div>

						{/* React Modal 2 */}
						<div className="z-[2] mx-auto">
							<ProjectModal
								signType={"react-two"}
								title={"React Project Two"}
								description={"This is my second best React project"}
								img={"/keyControls.png"}
							/>
						</div>

						{/* Three.js Modal 1 */}
						<div className="z-[2] mx-auto">
							<ProjectModal
								signType={"three-one"}
								title={"Three.js Project One"}
								description={"This is my best Three.js project"}
								img={"/keyControls.png"}
							/>
						</div>

						{/* Three.js Modal 2 */}
						<div className="z-[2] mx-auto">
							<ProjectModal
								signType={"three-two"}
								title={"Three.js Project Two"}
								description={"This is second my best Three.js project"}
								img={"/keyControls.png"}
							/>
						</div>

						{/* Misc Project Modal */}
						<div className="z-[2] mx-auto">
							<ProjectModal
								signType={"all-projects"}
								title={"Full List of Large Projects"}
								description={"Here are all my finished projects"}
								img={"/keyControls.png"}
							/>
						</div>

						{/* About Modal */}
						<div className="z-[2] mx-auto">
							<AboutModal signType={"about"} />
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
			</HoverContextProvider>
		</ModalContextProvider>
	);
}
