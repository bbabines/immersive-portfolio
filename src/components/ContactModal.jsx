import { useModalContext } from "./ModalContext";
import { about } from "./data/data";

const ContactModal = ({ signType }) => {
	const { signSelected, setSignSelected } = useModalContext();

	const handleModalClose = () => {
		setSignSelected("");
	};

	return (
		<div
			className={
				signSelected === signType
					? "w-[500px] text-white bg-[#161d26] bg-opacity-90 rounded-2xl"
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

				{/* Information */}
				<div className="py-4 flex flex-col justify-center items-center">
					<h1 className="py-2 text-[2.5rem] text-[#eab832]">Contact</h1>
					<h3 className="mb-4 text-[1.25rem]">Drop a Line, Start a Journey.</h3>
					<div className="m-4">
						<div className="my-2">
							{/* <img src="" alt="" /> */}
							<span className="font-thin">Email: </span>
							<span className="font-medium hover:text-[#eab832]">
								<a href="mailto:bbabines@gmail.com" target="_blank">
									bbabines@gmail.com
								</a>
							</span>
						</div>

						<div className="my-2">
							{/* <img src="" alt="" className="h-[25px]" /> */}
							<span className="font-thin">GitHub: </span>
							<span className="font-medium hover:text-[#eab832]">
								<a href="https://github.com/bbabines" target="_blank">
									https://github.com/bbabines
								</a>
							</span>
						</div>

						<div className="my-2">
							{/* <img src="" alt="" className="h-[25px]" /> */}
							<span className="font-thin">Twitter: </span>
							<span className="font-medium hover:text-[#eab832]">
								<a href="https://twitter.com/RejuvenatingRo1" target="_blank">
									@RejuvenatingRo1 (Brad B.)
								</a>
							</span>
						</div>

						<div className="my-2">
							{/* <img src="" alt="" className="h-[25px]" /> */}
							<span className="font-thin">LinkedIn: </span>
							<span className="font-medium hover:text-[#eab832]">
								<a
									href="https://www.linkedin.com/in/bradbabines"
									target="_blank"
								>
									https://www.linkedin.com/in/bradbabines
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
