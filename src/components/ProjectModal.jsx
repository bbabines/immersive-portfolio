import { useModalContext } from "./context/ModalContext";

const ProjectModal = ({
	title,
	description,
	img1,
	signType,
	stack,
	githubLink,
	liveLink,
	features,
}) => {
	const { signSelected, setSignSelected } = useModalContext();

	const handleModalClose = () => {
		setSignSelected("");
	};

	return (
		<div
			className={
				signSelected === signType
					? "max-w-[1500px] max-h-[95vh] w-[50vw] min-w-[350px] overflow-auto text-white bg-[#161d26] bg-opacity-90 rounded-2xl transition-opacity duration-300 ease-in-out opacity-100"
					: "hidden"
			}
		>
			<div className="relative">
				<div
					className="w-[2em] h-[2em] flex  justify-center items-center bg-white text-black rounded-full mt-2 absolute left-[93%] top-[2%] cursor-pointer max-2xl:left-[87%] max-2xl:top-[0%]"
					onClick={handleModalClose}
				>
					X
				</div>

				<div className="py-4 flex flex-col justify-center items-center">
					<h1 className="py-4 text-[2.5rem] text-[#eab832] max-2xl:text-center">
						{title}
					</h1>
					<div className="mx-8 flex flex-wrap">
						<img
							src={img1}
							alt="a thumbnail of the project"
							className="w-[50%] min-w-[300px] mx-auto pr-4 rounded-lg max-xl:mb-4"
						/>

						<div className="w-[50%] flex flex-col justify-between max-xl:mx-auto max-xl:w-[85%]">
							<div className="mb-8">
								{description}
								<p className="mt-4 font-thin">
									Project Features Include:{" "}
									<span className="font-medium">{features}</span>
								</p>
							</div>
							<div>
								<p className="mt-4 font-thin">
									Front End Stack: <span className="font-medium">{stack}</span>
								</p>
							</div>
						</div>
					</div>

					<div className="w-[100%] mt-2 flex flex-wrap font-thin">
						<div className="my-4 mr-auto ml-8 cursor-pointer max-2xl:mx-auto max-2xl:flex max-2xl:flex-col max-2xl:items-center max-2xl:text-center">
							Source Code:{" "}
							<span className="text-[#eab832] font-medium hover:text-white">
								<a href={`${githubLink}`} target="_blank">
									{githubLink}
								</a>
							</span>
						</div>
						<div className="my-4 ml-auto mr-8 cursor-pointer max-2xl:mx-auto max-2xl:flex max-2xl:flex-col max-2xl:items-center max-2xl:text-center">
							Live Site:{" "}
							<span className="text-[#eab832] font-medium hover:text-white">
								<a href={`${liveLink}`} target="_blank">
									{liveLink}
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
