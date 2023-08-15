import { useState } from "react";
import { useModalContext } from "../components/ModalContext";

const ProjectModal = () => {
	const { signSelected, setSignSelected } = useModalContext();

	const handleModalClose = () => {
		setSignSelected(null);
	};

	return (
		<div
			className={
				signSelected === "back-right"
					? "h-[500px] w-[500px] text-white bg-black"
					: "hidden"
			}
		>
			<div className="relative">
				<p
					className="w-[2em] h-[2em] flex justify-center items-center bg-white text-black rounded-full mt-2 absolute left-[90%] cursor-pointer"
					onClick={handleModalClose}
				>
					X
				</p>
				<p>SPOTLIGHT PROJECT 1</p>
			</div>
		</div>
	);
};

export default ProjectModal;
