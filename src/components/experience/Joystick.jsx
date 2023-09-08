"use client";

import React, { useRef, useEffect } from "react";
// import nipplejs from "nipplejs";

const Joystick = ({ onMove, onEnd }) => {
	const joystickRef = useRef(null);

	useEffect(() => {
		// Delay of import needed to avoid "window is undefined error"
		const nipplejs = require("nipplejs");

		if (joystickRef.current) {
			const manager = nipplejs.create({
				zone: document.getElementById("static"),
				mode: "static",
				// multitouch: true,
				maxNumberOfNipples: 1,
				size: 100,
			});

			manager.on("move", (event, data) => {
				// console.log("Joystick move triggered");
				if (onMove) {
					onMove(data);
				}
			});

			manager.on("end", () => {
				console.log("Joystick end triggered");
				if (onEnd) {
					onEnd();
				}
			});

			return () => {
				manager.off("move");
				manager.off("end");
				manager.destroy();
			};
		}
	}, [onMove, onEnd]);

	return (
		<>
			<div
				ref={joystickRef}
				id="static"
				className="sm:hidden"
				style={{
					position: "absolute",
					bottom: "4%",
					left: "45%",
					width: "100px",
					height: "100px",
				}}
			/>
		</>
	);
};

export default Joystick;
