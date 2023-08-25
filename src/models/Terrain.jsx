/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Terrain(props) {
	const { nodes, materials } = useGLTF("/forest_terrain.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.mesh_0.geometry}
				material={nodes.mesh_0.material}
			/>
		</group>
	);
}

useGLTF.preload("/forest_terrain.glb");
