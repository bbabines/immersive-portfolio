import React, { useRef, useEffect } from "react";
import nipplejs from "nipplejs";

function Joystick({ onMove, onEnd }) {
	const containerRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const joystick = new nipplejs.create({
			zone: containerRef.current,
			mode: "static",
			// Test
			multitouch: true,
			// Test
			position: { left: "50%", top: "50%" },
			color: "white",
		});

		joystick.on("move", (event, data) => {
			if (onMove) {
				onMove(data);
			}
		});

		//    joystick.on("end", (evt, nipple) => {
		//   	x: 0,
		//	 	y: 0,
		// 		});

		return () => {
			joystick.destroy();
		};
	}, [onMove]);

	return (
		<div
			ref={containerRef}
			className="sm:hidden"
			style={{
				position: "absolute",
				bottom: "5%",
				left: "45%",
				width: "100px",
				height: "100px",
			}}
		/>
	);
}

export default Joystick;
