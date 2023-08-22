/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function PortfolioAvatar(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF("/PortfolioAvatar.glb");
	const { actions, names } = useAnimations(animations, group);

	useEffect(() => {
		actions[names[14]].play();
	}, []);

	// const handleKeyPress = (event) => {
	// 	if (
	// 		event.key === "w" ||
	// 		event.key === "s" ||
	// 		event.key === "a" ||
	// 		event.key === "d"
	// 	) {
	// 		actions[names[17]].play(); // Walking animation
	// 	} else if (event.key === "Shift") {
	// 		actions[names[17]].stop();
	// 		actions[names[16]].play(); // Running animation
	// 	}
	// };

	// const handleShowProfile = (event) => {
	// 	if (event.key === "p") {
	// 		setShowProfile(true);
	// 	}
	// };

	// const handleKeyUp = () => {
	// 	actions[names[17]].stop(); // Stop the walking animation
	// 	actions[names[16]].stop(); // Stop the running animation
	// 	actions[names[14]].reset().play(); // Reset and play idle animation on key up
	// };

	// useEffect(() => {
	// 	window.addEventListener("keydown", handleKeyPress);
	// 	window.addEventListener("keyup", handleKeyUp);
	// 	return () => {
	// 		window.removeEventListener("keydown", handleKeyPress);
	// 		window.removeEventListener("keyup", handleKeyUp);
	// 	};
	// }, []);

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<group name="Armature" position={[0, 0.3, 0]}>
					<skinnedMesh
						name="Body"
						geometry={nodes.Body.geometry}
						material={materials["Knight_MAT2.002"]}
						skeleton={nodes.Body.skeleton}
						position={[3, -0.75, 0]}
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.01}
					/>
					<skinnedMesh
						name="Head_Hands"
						geometry={nodes.Head_Hands.geometry}
						material={materials["Knight_MAT2.002"]}
						skeleton={nodes.Head_Hands.skeleton}
					/>
					<skinnedMesh
						name="Lower_Armor"
						geometry={nodes.Lower_Armor.geometry}
						material={materials["Knight_MAT2.002"]}
						skeleton={nodes.Lower_Armor.skeleton}
					/>
					<primitive object={nodes.mixamorigHips} />
					<primitive object={nodes.Ctrl_Master} />
					<primitive object={nodes.Ctrl_ArmPole_IK_Left} />
					<primitive object={nodes.Ctrl_Hand_IK_Left} />
					<primitive object={nodes.Ctrl_ArmPole_IK_Right} />
					<primitive object={nodes.Ctrl_Hand_IK_Right} />
					<primitive object={nodes.Ctrl_Foot_IK_Left} />
					<primitive object={nodes.Ctrl_LegPole_IK_Left} />
					<primitive object={nodes.Ctrl_Foot_IK_Right} />
					<primitive object={nodes.Ctrl_LegPole_IK_Right} />
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/PortfolioAvatar.glb");
