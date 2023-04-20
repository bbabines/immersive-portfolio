import * as THREE from "three";

import { OrbitControls } from "@react-three/drei";
import { Physics, Debug } from "@react-three/rapier";

import Lights from "./Lights.jsx";
import Player from "./Player.jsx";
import { Level } from "./Level.jsx";
import useGame from "./useGame.jsx";
THREE.ColorManagement.legacyMode = false;

const Experience = () => {
	const blocksCount = useGame((state) => state.blocksCount);
	const blocksSeed = useGame((state) => state.blocksSeed);
	{
		return (
			<>
				<color args={["#252731"]} attach="background" />
				{/* SCENE UTILS */}
				<OrbitControls makeDefault />
				<Lights />

				<Physics>
					{/* <Debug /> */}
					<Level count={blocksCount} seed={blocksSeed} />
					<Player />
				</Physics>
			</>
		);
	}
};

export default Experience;
