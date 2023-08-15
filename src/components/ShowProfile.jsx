import React, { useState, useEffect, useRef } from "react";

const ShowProfile = () => {
	const [showProfile, setShowProfile] = useState(false);

	const handleShowProfile = (event) => {
		if (event.key === "p") {
			setShowProfile((prevState) => !prevState);
		}
	};

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
						? `min-h-[300px] min-w-[300px] h-[50%] w-[50%] bg-white flex justify-center  items-center`
						: `hidden`
				}`}
			>
				PROFILE
			</p>
		</div>
	);
};

export default ShowProfile;
