import { useModalContext } from "./context/ModalContext";
import { allProjects } from "./data/data";

const MultiProjectModal = ({ title, signType }) => {
	const { signSelected, setSignSelected } = useModalContext();

	const handleModalClose = () => {
		setSignSelected("");
	};

	return (
		<div
			className={
				signSelected === signType
					? "max-w-[1500px] max-h-[95vh] w-[50vw] min-w-[320px] overflow-auto text-white bg-[#161d26] bg-opacity-90 rounded-2xl"
					: "hidden"
			}
		>
			<div className="relative">
				<div
					className="w-[2em] h-[2em] flex justify-center items-center bg-white text-black rounded-full mt-2 absolute left-[95%] top-[2%] cursor-pointer max-xl:left-[85%] max-xl:top-[0%]"
					onClick={handleModalClose}
				>
					X
				</div>
				<div className="py-4 px-2 flex flex-col justify-center items-center">
					<h1 className="py-4 text-[2.5rem] text-[#eab832]">{title}</h1>
					<div className="flex flex-wrap justify-center items-center gap-4">
						{allProjects.map((project, index) => (
							<div
								key={index}
								className="w-[300px] p-4 mb-4 bg-[#151030] rounded-2xl"
							>
								<div>
									<div className="flex items-center justify-center max-h-[150px]">
										<img
											src={project.image}
											alt="thumbnail of the project"
											className=" h-[150px] object-contain rounded-2xl"
										/>
									</div>
									<p className="my-2 font-bold">{project.name}</p>
									<p className="font-light text-[0.95rem]">
										{project.description}
									</p>
									<div className="my-2 flex justify-center">
										<p className="mx-2 blue-text-gradient">
											{project.tags[0].name}
										</p>
										<p className="mx-2 green-text-gradient">
											{project.tags[1].name}
										</p>
										<p className="mx-2 pink-text-gradient">
											{project.tags[2].name}
										</p>
									</div>
									<div className="flex justify-between">
										<a href={project.source_code_link} target="_blank">
											<div className="h-[40px] w-[40px] black-gradient rounded-full flex justify-center items-center border border-[#eab832] hover:border-[#86efac] cursor-pointer">
												<img
													src="github.png"
													alt="GitHub icon"
													className="h-[90%] w-[90%] object-contain"
												/>
											</div>
										</a>
										<a href={project.live_demo_link} target="_blank">
											<div className="h-[40px] w-[40px] black-gradient rounded-full flex justify-center items-center border border-[#eab832] hover:border-[#86efac] cursor-pointer">
												<img
													src="demo.png"
													alt="Demo icon"
													className="h-[65%] object-contain"
												/>
											</div>
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MultiProjectModal;
