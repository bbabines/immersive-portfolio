import { useModalContext } from "./ModalContext";
import { about } from "../components/data/data";

const AboutModal = ({ signType }) => {
	const { signSelected, setSignSelected } = useModalContext();

	const handleModalClose = () => {
		setSignSelected("");
	};

	return (
		<div
			className={
				signSelected === signType
					? "max-w-[1500px] max-h-[95vh] w-[50vw] min-w-[300px] overflow-auto text-white bg-[#161d26] bg-opacity-90 rounded-2xl"
					: "hidden"
			}
		>
			<div className="relative">
				<div
					className="w-[2em] h-[2em] flex justify-center items-center bg-white text-black rounded-full mt-2 absolute left-[92%] top-[1%] cursor-pointer max-xl:left-[80%] "
					onClick={handleModalClose}
				>
					X
				</div>

				{/* Information */}
				<div className="py-4 flex flex-col justify-center items-center">
					<h1 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#eab832]">
						About
					</h1>
					<p className="mb-4 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
						Beyond the Bio
					</p>
					<h3 className=" mx-8">
						Hi, I'm <span className="text-[#eab832]"> Brad</span>!
						<br /> <br />
						<span className="font-thin">{about.intro}</span>
					</h3>
					<div className="m-4">
						<p className="m-4">
							<span className="font-bold">Personality Type: </span>
							<span className="font-thin">{about.personalityProfile}</span>
						</p>
						<p className="m-4">
							<span className="font-bold">Personal Interest: </span>
							<span className="font-thin">{about.personalInterest}</span>
						</p>
						<p className="m-4">
							<span className="font-bold">Places I've Traveled: </span>
							<span className="font-thin">{about.travelAbroad}</span>
						</p>
						<p className="m-4">
							<span className="font-bold">Side Projects: </span>
							<span className="font-thin">{about.personalProjects}</span>
						</p>
						<p className="m-4">
							<span className="font-bold">Favorite Books: </span>
							<span className="font-thin">{about.favoriteBooks}</span>
						</p>
						<p className="m-4">
							<span className="font-bold">Favorite Quote: </span>
							<span className="font-thin">{about.favoriteQuotes}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutModal;
