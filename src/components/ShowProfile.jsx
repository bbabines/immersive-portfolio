import React, { useState, useEffect, useRef } from "react";

const ShowProfile = () => {
	const [showProfile, setShowProfile] = useState(true);

	const handleShowProfile = (event) => {
		if (event.key === "p") {
			setShowProfile((prevState) => !prevState);
		}
	};

	console.log(showProfile);

	useEffect(() => {
		window.addEventListener("keydown", handleShowProfile);
		return () => {
			window.removeEventListener("keydown", handleShowProfile);
		};
	}, []);

	return (
		<div>
			<p
				className={`${
					showProfile === true
						? `h-[500px] w-[500px] bg-white flex justify-center  items-center`
						: `hidden`
				}`}
			>
				PROFILE
			</p>
		</div>
	);
};

export default ShowProfile;
