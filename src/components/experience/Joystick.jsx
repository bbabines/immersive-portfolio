import React, { useRef, useEffect } from "react";
import nipplejs from "nipplejs";

function Joystick({ onMove }) {
	const containerRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const joystick = new nipplejs.create({
			zone: containerRef.current,
			mode: "static",
			position: { left: "50%", top: "50%" },
			color: "white",
		});

		joystick.on("move", (event, data) => {
			if (onMove) {
				onMove(data);
			}
		});

		return () => {
			joystick.destroy();
		};
	}, [onMove]);

	return (
		<div
			ref={containerRef}
			style={{
				position: "absolute",
				bottom: "10px",
				left: "50%",
				width: "100px",
				height: "100px",
			}}
		/>
	);
}

export default Joystick;
