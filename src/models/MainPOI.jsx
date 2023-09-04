/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, useRef } from "react";
import {
	useGLTF,
	useAnimations,
	useCursor,
	Html,
	Float,
} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { useModalContext } from "../components/ModalContext";
import { useHoverContext } from "../components/HoverContext";
import ModalText from "../components/experience/ModalText";

export default function MainPOI(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF("/mainPOIPruned.glb");
	const { actions } = useAnimations(animations, group);

	const [hovered, setHovered] = useState();
	const { signSelected, setSignSelected } = useModalContext();
	const { hoverText, setHoverText } = useHoverContext();

	useCursor(hovered);

	return (
		<RigidBody type="fixed" colliders={false}>
			{/* Invisible Spawn Point Physics */}
			<RigidBody type="fixed" includeInvisible>
				<mesh position={[-52, 1.4, 24]} visible={false}>
					<boxGeometry args={[3, 0.1, 3]} />
					<meshStandardMaterial color="mediumpurple" />
				</mesh>

				<mesh position={[-49.8, 1, 24]} rotation={[0, 0, -10]} visible={false}>
					<boxGeometry args={[1.7, 0.1, 3.5]} />
					<meshStandardMaterial color="mediumpurple" />
				</mesh>
			</RigidBody>
			<group ref={group} {...props} dispose={null}>
				<group name="Scene">
					{/* Spawn Point */}
					<group
						name="spawn_point"
						position={[-260, 1, 120]}
						rotation={[-Math.PI, 1.558, -Math.PI]}
						scale={20}
					>
						<mesh
							name="Circle025"
							castShadow
							receiveShadow
							geometry={nodes.Circle025.geometry}
							material={materials.Base_SideRocks_MAT}
						/>
						<mesh
							name="Circle025_1"
							castShadow
							receiveShadow
							geometry={nodes.Circle025_1.geometry}
							material={materials.Foliage_MAT}
						/>
						<mesh
							name="Circle025_2"
							castShadow
							receiveShadow
							geometry={nodes.Circle025_2.geometry}
							material={materials.Water_MAT}
						/>
						<mesh
							name="Circle025_3"
							castShadow
							receiveShadow
							geometry={nodes.Circle025_3.geometry}
							material={materials.Base_Base_MAT}
						/>
					</group>

					{/* Middle Sign */}
					<ModalText
						center
						text={"More Projects"}
						position={[450, 150, -105]}
						sign={"all-projects"}
					/>
					<Html
						occlude
						transform
						distanceFactor={20}
						position={[430, 110, -100]}
						scale={[6, 2.5, 5]}
						rotation={[0, Math.PI * -0.43, 0]}
					>
						<img
							src="/all-projects.png"
							alt="project thumbnail"
							className="w-[300px] cursor-pointer rounded-lg"
							style={{ userSelect: "none" }}
							onClick={() => {
								setSignSelected("all-projects");
							}}
							onPointerOver={() => {
								setHovered(true);
								setHoverText("all-projects");
								event.stopPropagation(); // Prevent event propagation
							}}
							onPointerOut={() => {
								setHovered(false);
								setHoverText("");
							}}
						/>
					</Html>

					{/* <mesh
					name="middle_sign"
					castShadow
					receiveShadow
					geometry={nodes.middle_sign.geometry}
					material={materials.Billboard}
					position={[450, 10, -100]}
					rotation={[0, -1.364, 0]}
					scale={6}
				/> */}

					{/* Front Left Sign */}
					<ModalText
						text={"Kubera Link"}
						position={[255, 40, -230]}
						sign={"font-left"}
					/>
					<Html
						occlude
						transform
						distanceFactor={15}
						position={[249, 13, -229]}
						scale={[3.2, 3, 5]}
						rotation={[0, Math.PI * -0.431, 0]}
					>
						<img
							src="/kubera.png"
							alt="project thumbnail"
							className="w-[300px] cursor-pointer rounded-lg"
							style={{ userSelect: "none" }}
							onClick={() => {
								setSignSelected("react-one");
							}}
							onPointerOver={() => {
								setHovered(true);
								setHoverText("font-left");
								event.stopPropagation();
							}}
							onPointerOut={() => {
								setHovered(false);
								setHoverText("");
							}}
						/>
					</Html>
					<RigidBody type="fixed" restitution={0.01}>
						<mesh
							name="front_left_sign"
							castShadow
							receiveShadow
							geometry={nodes.front_left_sign.geometry}
							material={materials.Billboard}
							position={[255, -1, -230]}
							rotation={[0, -1.364, 0]}
							scale={6}
						/>
					</RigidBody>

					{/* Back Left Sign */}
					<ModalText
						text={"Ikon Clothing"}
						position={[266, 55, -120]}
						sign={"back-left"}
					/>
					<Html
						occlude
						transform
						distanceFactor={15}
						position={[274, 14, -118]}
						scale={[3.3, 2.6, 5]}
						rotation={[0, Math.PI * -0.437, 0]}
					>
						<img
							src="/ikon.png"
							alt="project thumbnail"
							className="w-[300px] cursor-pointer rounded-lg"
							style={{ userSelect: "none" }}
							onClick={() => {
								setSignSelected("react-two");
							}}
							onPointerOver={() => {
								setHovered(true);
								setHoverText("back-left");
								event.stopPropagation(); // Prevent event propagation
							}}
							onPointerOut={() => {
								setHovered(false);
								setHoverText("");
							}}
						/>
					</Html>

					<RigidBody type="fixed" restitution={0.01}>
						<mesh
							name="back_left_sign"
							castShadow
							receiveShadow
							geometry={nodes.back_left_sign.geometry}
							material={materials.Billboard}
							position={[280, 0, -120]}
							rotation={[0, -1.364, 0]}
							scale={6}
						/>
					</RigidBody>

					{/* Back Right Sign */}
					<ModalText
						text={"Marble Madness"}
						position={[300, 40, -20]}
						sign={"back-right"}
					/>
					<Html
						occlude
						transform
						distanceFactor={15}
						position={[294, 12.5, -19]}
						scale={[3.2, 2.3, 5]}
						rotation={[0, Math.PI * -0.43, 0]}
					>
						<img
							src="/marble.png"
							alt="project thumbnail"
							className="w-[300px] cursor-pointer rounded-lg"
							style={{ userSelect: "none" }}
							onClick={() => {
								setSignSelected("three-two");
							}}
							onPointerOver={() => {
								setHovered(true);
								setHoverText("back-right");
								event.stopPropagation(); // Prevent event propagation
							}}
							onPointerOut={() => {
								setHovered(false);
								setHoverText("");
							}}
						/>
					</Html>
					<RigidBody type="fixed" restitution={0.01}>
						<mesh
							name="back_right_sign"
							castShadow
							receiveShadow
							geometry={nodes.back_right_sign.geometry}
							material={materials.Billboard}
							position={[300, -2, -20]}
							rotation={[0, -1.364, 0]}
							scale={6}
						/>
					</RigidBody>

					{/* Front Right Sign */}
					<ModalText
						text={"Legends of Aetheria"}
						position={[330, 55, 120]}
						sign={"front-right"}
					/>
					<Html
						occlude
						transform
						distanceFactor={15}
						position={[324, 14.5, 122]}
						scale={[3.3, 2.7, 5]}
						rotation={[0, Math.PI * -0.43, 0]}
					>
						<img
							src="/rpg.png"
							alt="project thumbnail"
							className="w-[300px] cursor-pointer rounded-lg"
							style={{ userSelect: "none" }}
							onClick={() => {
								setSignSelected("three-one");
							}}
							onPointerOver={() => {
								setHovered(true);
								setHoverText("front-right");
								event.stopPropagation();
							}}
							onPointerOut={() => {
								setHovered(false);
								setHoverText("");
							}}
						/>
					</Html>
					<RigidBody type="fixed" restitution={0.01}>
						<mesh
							name="front-_rigjht_sign"
							castShadow
							receiveShadow
							geometry={nodes["front-_rigjht_sign"].geometry}
							material={materials.Billboard}
							position={[330, 0, 120]}
							rotation={[0, -1.364, 0]}
							scale={6}
						/>
					</RigidBody>

					{/* House */}
					<ModalText text={"About"} position={[-80, 50, -310]} sign={"house"} />
					<group
						name="house"
						position={[-78.993, -3, -314.37]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={11}
						onClick={() => {
							setSignSelected("about");
						}}
						onPointerOver={() => {
							setHovered(true);
							setHoverText("house");
							event.stopPropagation(); // Prevent event propagation
						}}
						onPointerOut={() => {
							setHovered(false);
							setHoverText("");
						}}
					>
						<group name="TinyCabinFantasy_Textured_Sceneobjcleanermaterialmergergles">
							<mesh
								name="Object_10"
								castShadow
								receiveShadow
								geometry={nodes.Object_10.geometry}
								material={materials["standard.002"]}
							/>
							<mesh
								name="Object_11"
								castShadow
								receiveShadow
								geometry={nodes.Object_11.geometry}
								material={materials["standard.002"]}
							/>

							<mesh
								name="Object_12"
								castShadow
								receiveShadow
								geometry={nodes.Object_12.geometry}
								material={materials["stone.002"]}
							/>
							<RigidBody type="fixed" restitution={0.01}>
								<mesh
									name="Object_14"
									castShadow
									receiveShadow
									geometry={nodes.Object_14.geometry}
									material={materials["window_bar.002"]}
								/>

								<mesh
									name="Object_15"
									castShadow
									receiveShadow
									geometry={nodes.Object_15.geometry}
									material={materials["windowemiisive-8355712.002"]}
								/>
								<mesh
									name="Object_4"
									castShadow
									receiveShadow
									geometry={nodes.Object_4.geometry}
									material={materials["House_wall-8355712.002"]}
								/>
								<mesh
									name="Object_5"
									castShadow
									receiveShadow
									geometry={nodes.Object_5.geometry}
									material={materials["MainWood.002"]}
								/>
							</RigidBody>
							<mesh
								name="Object_7"
								castShadow
								receiveShadow
								geometry={nodes.Object_7.geometry}
								material={materials["grass.002"]}
								onClick={() => {
									setSignSelected("about");
								}}
								onPointerOver={() => {
									setHovered(true);
									setHoverText("house");
									event.stopPropagation(); // Prevent event propagation
								}}
								onPointerOut={() => {
									setHovered(false);
									setHoverText("");
								}}
							/>

							<mesh
								name="Object_8"
								castShadow
								receiveShadow
								geometry={nodes.Object_8.geometry}
								material={materials["roof-8355712.002"]}
							/>

							<mesh
								name="Object_9"
								castShadow
								receiveShadow
								geometry={nodes.Object_9.geometry}
								material={materials["roofunderwood-8355712.002"]}
							/>
						</group>
					</group>

					{/* LinkedIn */}
					{hoverText === "linkedin" && (
						<Html center position={[35, 25, 327]}>
							<div
								style={{ userSelect: "none" }}
								className="flex flex-col justify-center items-center"
							>
								<p style={{ color: "#6ee06e", marginBottom: "-5px" }}>
									LinkedIn
								</p>
								<p style={{ color: "#6ee06e", marginBottom: "10px" }}>
									{"<@bradbabines>"}
								</p>
							</div>
						</Html>
					)}
					<group
						name="linkedIn_icon"
						position={[35, 17, 326.99]}
						rotation={[-Math.PI / 2, 0, 3.081]}
						scale={2.24}
						onClick={() => {
							window.open("https://www.linkedin.com/in/bradbabines/", "_blank");
						}}
						onPointerOver={() => {
							setHovered(true);
							setHoverText("linkedin");
							event.stopPropagation();
						}}
						onPointerOut={() => {
							setHovered(false);
							setHoverText("");
						}}
					>
						<group name="root">
							<group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
								<group
									name="Cube_0"
									position={[0, 0, 0.121]}
									rotation={[0, 0, Math.PI]}
									scale={[-1.026, -1.088, -0.074]}
								>
									<mesh
										name="Object_4002"
										castShadow
										receiveShadow
										geometry={nodes.Object_4002.geometry}
										material={materials["Material.005"]}
									/>
								</group>
								<group
									name="Text001_5"
									position={[-0.778, -0.7, 0.243]}
									rotation={[Math.PI / 2, 0, 0]}
									scale={[2.334, 0.788, 2.334]}
								>
									<mesh
										name="Object_6"
										castShadow
										receiveShadow
										geometry={nodes.Object_6.geometry}
										material={materials["Material.006"]}
									/>
								</group>
							</group>
						</group>
					</group>

					{/* Twitter */}
					{hoverText === "twitter" && (
						<Html center position={[-37, 25, 328]}>
							<div
								style={{ userSelect: "none" }}
								className="flex flex-col justify-center items-center"
							>
								<p
									style={{ color: "#6ee06e", marginBottom: "-5px" }}
									className=""
								>
									Twitter
								</p>
								<p style={{ color: "#6ee06e", marginBottom: "10px" }}>
									{"<@RejuvenatingRo1>"}
								</p>
							</div>
						</Html>
					)}
					<group
						name="twitter_icon"
						position={[-20, 5, 328.04]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={0.014}
						onClick={() => {
							window.open("https://twitter.com/RejuvenatingRo1", "_blank");
						}}
						onPointerOver={() => {
							setHovered(true);
							setHoverText("twitter");
							event.stopPropagation();
						}}
						onPointerOut={() => {
							setHovered(false);
							setHoverText("");
						}}
					>
						<group
							name="84012a783ac14b0093a189f1d945e890fbx"
							rotation={[Math.PI / 2, 0, 0]}
						>
							<group name="RootNode005">
								<group
									name="CINEMA_4D_Editor"
									position={[32.749, 127.029, 554.541]}
									rotation={[-Math.PI, 1.498, 3.004]}
								>
									<group name="Object_4003" />
								</group>
								<group name="twitter_logo" rotation={[Math.PI / 2, 0, 0]}>
									<mesh
										name="twitter_logo_twitter_logo_0"
										castShadow
										receiveShadow
										geometry={nodes.twitter_logo_twitter_logo_0.geometry}
										material={materials.twitter_logo}
										position={[-1182.669, -90.168, -882.481]}
										scale={1.463}
									/>
								</group>
							</group>
						</group>
					</group>

					{/* Github */}
					{hoverText === "github" && (
						<Html center position={[14, 12, 325]}>
							<div
								style={{ userSelect: "none" }}
								className="flex flex-col justify-center items-center"
							>
								<p
									style={{ color: "#6ee06e", marginBottom: "-5px" }}
									className=""
								>
									GitHub
								</p>
								<p style={{ color: "#6ee06e", marginBottom: "10px" }}>
									{"<@bbabines>"}
								</p>
							</div>
						</Html>
					)}

					<group
						name="github_icon"
						position={[20, -4, 326.46]}
						rotation={[-Math.PI / 2, 0, 3.117]}
						onClick={() => {
							window.open("https://github.com/bbabines", "_blank");
						}}
						onPointerOver={() => {
							setHovered(true);
							setHoverText("github");
							event.stopPropagation();
						}}
						onPointerOut={() => {
							setHovered(false);
							setHoverText("");
						}}
					>
						<group name="root001">
							{/* Invisible GitHub Physics */}
							<RigidBody type="fixed" includeInvisible>
								<mesh position={[6.5, -1, 4]} visible={false}>
									<boxGeometry args={[6, 2, 8]} />
									<meshStandardMaterial color="mediumpurple" />
								</mesh>
							</RigidBody>
							<group
								name="GLTF_SceneRootNode001"
								rotation={[Math.PI / 2, 0, 0]}
							>
								<group
									name="NODE_167_6"
									position={[0, 9.995, 1.325]}
									scale={0.05}
								>
									<mesh
										name="Object_16"
										castShadow
										receiveShadow
										geometry={nodes.Object_16.geometry}
										material={materials.material_6}
									/>
								</group>
								<group
									name="NODE_284_4"
									position={[-0.001, 9.996, 1.81]}
									scale={0.05}
								/>
								<group
									name="NODE_285_5"
									position={[0.012, 10.002, 1.755]}
									scale={0.05}
								/>
								<group
									name="NODE_320_3"
									position={[-0.002, 9.988, 1.799]}
									scale={0.05}
								/>
								<group
									name="NODE_321_2"
									position={[-0.002, 9.994, 1.813]}
									scale={0.05}
								/>
								<group
									name="NODE_326_1"
									position={[0.002, 9.997, 1.486]}
									scale={0.05}
								>
									<mesh
										name="Object_6002"
										castShadow
										receiveShadow
										geometry={nodes.Object_6002.geometry}
										material={materials["material_1.001"]}
										position={[0, 0, -0.001]}
									/>
								</group>
								<group
									name="NODE_333_0"
									position={[0.004, 9.995, 0.635]}
									scale={0.05}
								>
									<mesh
										name="Object_4004"
										castShadow
										receiveShadow
										geometry={nodes.Object_4004.geometry}
										material={materials.material_0}
									/>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</RigidBody>
	);
}

useGLTF.preload("/mainPOIPruned.glb");
