import { Debug, Physics } from "@react-three/rapier";

import Lights from "./Lights.jsx";
// import Plane from "./Plane.jsx";
import MyPlayer from "./MyPlayer.jsx";
import { Land } from "./Land.jsx";
import { Tree } from "./Tree.jsx";

const Experience = () => {
	{
		return (
			<>
				{/* SCENE UTILS */}
				<Lights />
				<Physics>
					{/* <Debug /> */}
					{/* MESH */}
					{/* <Plane color="lightgreen" position={[0, 0, 0]} />
					<Plane color="lightgreen" position={[0, 0, -20]} />
					<Plane color="lightgreen" position={[0, 0, -40]} /> */}

					<MyPlayer />
					<Tree />
					<Land />
				</Physics>
			</>
		);
	}
};

export default Experience;
