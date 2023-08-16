import { useModalContext } from "../components/ModalContext";

const ProjectModal = ({ title, description, img, signType }) => {
	const { signSelected, setSignSelected } = useModalContext();

	const handleModalClose = () => {
		setSignSelected("");
	};

	return (
		<div
			className={
				signSelected === signType
					? "h-[500px] w-[500px] text-white bg-[#161d26] bg-opacity-90 rounded-2xl"
					: "hidden"
			}
		>
			<div className="relative">
				<div
					className="w-[2em] h-[2em] flex justify-center items-center bg-white text-black rounded-full mt-2 absolute left-[90%] cursor-pointer"
					onClick={handleModalClose}
				>
					X
				</div>
				<div className="py-4 flex flex-col justify-center items-center">
					<h1 className="py-4 text-[2.5rem]">{title}</h1>
					<img
						src={img}
						alt="a thumbnail of the project"
						className="h-[30px]"
					/>
					<p className="my-4">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
