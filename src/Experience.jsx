import * as THREE from "three";

import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useFrame, useLoader } from "@react-three/fiber";

import Lights from "./Lights.jsx";
import Player from "./Player.jsx";
import { Level } from "./Level.jsx";
import useGame from "./useGame.jsx";
THREE.ColorManagement.legacyMode = false;

const Experience = () => {
	const blocksCount = useGame((state) => state.blocksCount);
	const blocksSeed = useGame((state) => state.blocksSeed);

	const fbx = useLoader(FBXLoader, "./old-guy.fbx");
	{
		return (
			<>
				{/* SCENE UTILS */}
				{/* <OrbitControls makeDefault /> */}
				<Lights />
				<Physics>
					<Level count={blocksCount} seed={blocksSeed} />
					<Player />
					{/* <primitive object={fbx} scale={0.01} /> */}
				</Physics>
			</>
		);
	}
};

export default Experience;
