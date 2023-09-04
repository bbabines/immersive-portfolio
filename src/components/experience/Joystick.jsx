// import React, { useEffect } from "react";
// import nipplejs from "nipplejs";

// function Joystick({ onMove }) {
// 	useEffect(() => {
// 		let joystick = nipplejs.create({
// 			zone: document.getElementById("joystick"),
// 			mode: "static",
// 			position: { left: "50%", top: "50%" },
// 			size: 200,
// 		});

// 		joystick.on("move", (_, data) => {
// 			onMove(data);
// 		});

// 		return () => {
// 			joystick.destroy();
// 		};
// 	}, [onMove]);

// 	return <div id="joystick" style={{ width: "100%", height: "100vh" }} />;
// }

// export default Joystick;
