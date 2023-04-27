import { Debug, Physics } from "@react-three/rapier";

import Lights from "./components/Lights.jsx";
import MyPlayer from "./components/MyPlayer.jsx";
import Ocean from "./components/Ocean.jsx";
import { Land } from "./components/Land.jsx";
import { Sign } from "./components/Sign.jsx";

const Experience = () => {
	{
		return (
			<>
				{/* SCENE UTILS */}
				<Lights />
				{/* <Physics> */}
				{/* <Debug /> */}
				{/* MESH */}

				<MyPlayer />
				<Sign />
				{/* <Land /> */}
				<Ocean />
				{/* </Physics> */}
			</>
		);
	}
};

export default Experience;
