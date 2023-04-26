import { Debug, Physics } from "@react-three/rapier";

import Lights from "./Lights.jsx";
import MyPlayer from "./MyPlayer.jsx";
import { Land } from "./Land.jsx";
import { Tree } from "./Tree.jsx";

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
				<Tree />
				<Land />
				{/* </Physics> */}
			</>
		);
	}
};

export default Experience;
