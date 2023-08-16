import { useModalContext } from "../components/ModalContext";

const ProjectModal = ({
	title,
	description,
	img1,
	img2,
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
					? "w-[1000px] text-white bg-[#161d26] bg-opacity-90 rounded-2xl"
					: "hidden"
			}
		>
			<div className="relative">
				<div
					className="w-[2em] h-[2em] flex justify-center items-center bg-white text-black rounded-full mt-2 absolute left-[95%] top-[2%] cursor-pointer"
					onClick={handleModalClose}
				>
					X
				</div>
				<div className="py-4 flex flex-col justify-center items-center">
					<h1 className="py-4 text-[2.5rem] text-[#eab832]">{title}</h1>

					<div className="mx-8 flex ">
						<div className="w-[50%] flex flex-col justify-between">
							<div className="mb-8">{description}</div>
							<div>
								<p className="font-thin">
									Project Features Include:{" "}
									<span className="font-medium">{features}</span>
								</p>

								<p className="my-4 font-thin">
									Front End Stack: <span className="font-medium">{stack}</span>
								</p>
							</div>
						</div>

						<img
							src={img1}
							alt="a thumbnail of the project"
							className="w-[50%] max-h-[400px] ml-2"
						/>
					</div>

					{/* Links */}
					<div className="w-[100%] mt-2 flex font-thin">
						<p className="my-4 mr-auto ml-8 cursor-pointer">
							Source Code:{" "}
							<span className="text-[#eab832] font-medium hover:text-white">
								{githubLink}
							</span>
						</p>
						<p className="my-4 ml-auto mr-8 cursor-pointer ">
							Live Site:{" "}
							<span className="text-[#eab832] font-medium hover:text-white">
								{liveLink}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
