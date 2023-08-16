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
					<h3 className="mb-8 text-[1.25rem]">Drop a Line, Start a Journey.</h3>
					<div className="m-4">
						<div>
							<img src="" alt="" />
							<span className="font-bold">Email: </span>
							<span className="font-thin">bbabines@gmail.com</span>
						</div>

						<div>
							<img src="" alt="" className="h-[25px]" />
							<span className="font-bold">GitHub: </span>
							<span className="font-thin">https://github.com/bbabines</span>
						</div>

						<div>
							<img src="" alt="" className="h-[25px]" />
							<span className="font-bold">Twitter: </span>
							<span className="font-thin">@RejuvenatingRo1 (Brad B.)</span>
						</div>

						<div>
							<img src="" alt="" className="h-[25px]" />
							<span className="font-bold">LinkedIn: </span>
							<span className="font-thin">
								https://www.linkedin.com/in/bradbabines/
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
