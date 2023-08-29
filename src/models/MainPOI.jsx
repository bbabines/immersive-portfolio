/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, useRef } from "react";
import { useGLTF, useAnimations, useCursor, Html } from "@react-three/drei";

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
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				{/* Left Tree */}
				<group
					name="tree"
					position={[-290, 0, 120]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
				>
					<group
						name="e4a9b945b60a47099b7ed8ca539f430afbx001"
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.01}
					>
						<group name="RootNode001">
							<group name="oak_01002">
								<group name="oak_01_leafes_Mat001_0003">
									<mesh
										name="oak_01_leafes_Mat001_0003_1"
										castShadow
										receiveShadow
										geometry={nodes.oak_01_leafes_Mat001_0003_1.geometry}
										material={materials["leafes_Mat.001"]}
									/>
									<mesh
										name="oak_01_leafes_Mat001_0003_2"
										castShadow
										receiveShadow
										geometry={nodes.oak_01_leafes_Mat001_0003_2.geometry}
										material={materials["trunk_Mat.001"]}
									/>
								</group>
							</group>
							<group name="oak_01003" />
						</group>
					</group>
				</group>

				{/*Right Tree */}
				<group
					name="tree001"
					position={[-257.753, -2.5, 20]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
				>
					<group
						name="e4a9b945b60a47099b7ed8ca539f430afbx005"
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.01}
					>
						<group name="RootNode002">
							<group name="oak_01001">
								<group
									name="oak_01_leafes_Mat001_0001"
									position={[32.469, 0, 0]}
								>
									<mesh
										name="oak_01_leafes_Mat001_0003_1"
										castShadow
										receiveShadow
										geometry={nodes.oak_01_leafes_Mat001_0003_1.geometry}
										material={materials["leafes_Mat.001"]}
									/>
									<mesh
										name="oak_01_leafes_Mat001_0003_2"
										castShadow
										receiveShadow
										geometry={nodes.oak_01_leafes_Mat001_0003_2.geometry}
										material={materials["trunk_Mat.001"]}
									/>
								</group>
							</group>
							<group name="oak_01010" />
						</group>
					</group>
				</group>

				{/* Spawn Sign */}
				<group
					name="starting_sign"
					position={[-220, 5, 70]}
					rotation={[-Math.PI / 2, 0, -1.641]}
					scale={5}
				>
					<group
						name="9303ec51146f438988862dc359454c98fbx"
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.01}
					>
						<group name="RootNode011">
							<group
								name="Circle002_low"
								position={[554.082, -10.423, -29.177]}
								rotation={[-Math.PI / 2, Math.PI / 2, 0]}
								scale={100}
							/>
							<group
								name="Circle23_low"
								position={[558.046, -10.836, -28.241]}
								rotation={[0, 0, -Math.PI / 4]}
								scale={100}
							/>
							<group
								name="Circle_low"
								position={[558.027, -10.929, -30.033]}
								scale={100}
							/>
							<group
								name="Cube001_low"
								position={[575.133, 0.555, -41.1]}
								rotation={[-Math.PI / 2, 0, 0]}
								scale={100}
							/>
							<group
								name="Cube002_low"
								position={[575.133, 63.635, -41.1]}
								rotation={[-Math.PI / 2, 0, 0]}
								scale={100}
							/>
							<group
								name="Cube003_low"
								position={[554.619, -22.815, -39.675]}
								rotation={[-Math.PI / 2, 0.607, 0]}
								scale={100}
							/>
							<group
								name="Cube004_low"
								position={[495.779, -4.184, -41.1]}
								rotation={[-Math.PI / 2, Math.PI / 2, 0]}
								scale={100}
							/>
							<group
								name="Cube005_low"
								position={[495.614, 64.173, -41.161]}
								rotation={[-Math.PI / 2, 0, 0]}
								scale={100}
							/>
							<group
								name="Cube006_low"
								position={[584.728, 0.536, -41.161]}
								rotation={[-Math.PI / 2, 0, 0]}
								scale={100}
							/>
							<group
								name="Cube007_low"
								rotation={[-Math.PI / 2, 0, 0]}
								scale={100}
							/>
							<group
								name="Cube007_low001"
								position={[585.575, 12.007, -39.84]}
								rotation={[-Math.PI / 2, 0, 0]}
								scale={100}
							/>
							<group
								name="Cube008_low"
								position={[586.019, 18.514, -39.211]}
								rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
								scale={100}
							/>
							<group
								name="Cube009_low"
								position={[586.019, 47.831, -39.211]}
								rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
								scale={100}
							/>
							<group
								name="Cube010_low"
								position={[577.352, 24.049, -23.856]}
								rotation={[-Math.PI / 2, 0, -0.532]}
								scale={100}
							/>
							<group
								name="Cube011_low"
								position={[595.683, 24.049, -55.004]}
								rotation={[-Math.PI / 2, 0, -0.532]}
								scale={100}
							/>
							<group
								name="Cube013_low"
								position={[528.699, 33.274, -42.735]}
								rotation={[-Math.PI / 2, 0, 0]}
								scale={100}
							/>
							<group
								name="Cube014_low"
								position={[585.888, 24.049, -39.832]}
								rotation={[-Math.PI / 2, 0, -0.532]}
								scale={100}
							/>
							<group
								name="Cube1488_low"
								rotation={[-Math.PI / 2, 0, 0]}
								scale={100}
							/>
							<group
								name="Cube712_low"
								rotation={[-Math.PI / 2, 0, 0]}
								scale={100}
							/>
							<group
								name="Cylinder001_low"
								position={[576.11, 100.277, -27.815]}
								scale={100}
							/>
							<group
								name="Cylinder002_low"
								position={[576.11, 85.591, -27.815]}
								scale={100}
							/>
							<group
								name="Cylinder003_low"
								position={[495.755, 64.836, -30.673]}
								scale={100}
							/>
							<group
								name="Cylinder004_low"
								position={[584.751, 0.501, -32.791]}
								scale={100}
							/>
							<group
								name="Cylinder005_low"
								position={[495.405, -0.068, -34.508]}
								scale={69.126}
							/>
							<group
								name="Cylinder006_low"
								position={[516.503, 63.768, -34.292]}
								scale={100}
							/>
							<group
								name="Cylinder007_low"
								position={[514.794, 0.478, -34.292]}
								scale={100}
							/>
							<group
								name="Cylinder008_low"
								position={[518.363, 50.506, -35.379]}
								scale={100}
							/>
							<group
								name="Cylinder008_low002"
								position={[536.072, 45.512, -36.438]}
								scale={100}
							/>
							<group
								name="Cylinder009_low"
								position={[587.13, 64.837, -32.645]}
								scale={100}
							/>
							<group
								name="Cylinder010_low"
								position={[591.201, 63.687, -41.356]}
								rotation={[0, 1.571, 0]}
								scale={100}
							/>
							<group
								name="Cylinder_low"
								position={[552.337, -10.879, -31.591]}
								rotation={[0, 1.571, 0]}
								scale={100}
							/>
							<group
								name="Icosphere_low"
								position={[558.06, -10.844, -25.901]}
								rotation={[-Math.PI / 2, 0, 0]}
								scale={100}
							>
								<mesh
									name="Icosphere_low_Sty_board_0"
									castShadow
									receiveShadow
									geometry={nodes.Icosphere_low_Sty_board_0.geometry}
									material={materials.Sty_board}
								/>
							</group>
							<group
								name="Plane001_low"
								position={[540.366, 42.113, -36.199]}
								scale={100}
							/>
							<group
								name="Plane_low"
								position={[518.166, 38.093, -35.388]}
								scale={100}
							/>
						</group>
					</group>
				</group>

				{/* Spawn Point */}
				<group
					name="spawn_point"
					position={[-260, 0.5, 80]}
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
					text={"All Projects"}
					position={[400, 45, -135]}
					sign={"all-projects"}
				/>

				{/* All Projects - Image overlay */}
				<Html
					// occludes
					transform
					distanceFactor={15}
					position={[357.209, 19, -135]}
					scale={[5, 2.5, 5]}
					rotation={[0, Math.PI * -0.5, 0]}
				>
					<img
						src="/all-projects.png"
						alt="project thumbnail"
						className="w-[300px] cursor-pointer rounded-lg"
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
				<mesh
					name="middle_sign"
					castShadow
					receiveShadow
					geometry={nodes.middle_sign.geometry}
					material={materials.Billboard}
					position={[357.209, 0, -135]}
					rotation={[0, -1.364, 0]}
					scale={8}
				/>

				{/* Front Left Sign */}
				<mesh
					name="front_left_sign"
					castShadow
					receiveShadow
					geometry={nodes.front_left_sign.geometry}
					material={materials.Billboard}
					position={[210, 1, -230]}
					rotation={[0, -1.364, 0]}
					scale={8}
				/>

				{/* Front Right Sign */}
				<mesh
					name="front-_rigjht_sign"
					castShadow
					receiveShadow
					geometry={nodes["front-_rigjht_sign"].geometry}
					material={materials.Billboard}
					position={[255.167, -2, 0]}
					rotation={[0, -1.364, 0]}
					scale={8}
				/>

				{/* Back Right Sign */}
				<mesh
					name="back_right_sign"
					castShadow
					receiveShadow
					geometry={nodes.back_right_sign.geometry}
					material={materials.Billboard}
					position={[300, -2, -60]}
					rotation={[0, -1.364, 0]}
					scale={8}
				/>

				{/* Back Left Sign */}
				<mesh
					name="back_left_sign"
					castShadow
					receiveShadow
					geometry={nodes.back_left_sign.geometry}
					material={materials.Billboard}
					position={[275, 0, -180]}
					rotation={[0, -1.364, 0]}
					scale={8}
				/>

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

				{/* Mailbox */}

				{/* LinkedIn */}
				<group
					name="linkedIn_icon"
					position={[13.137, 13.075, 326.99]}
					rotation={[-Math.PI / 2, 0, 3.081]}
					scale={2.24}
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
				<group
					name="twitter_icon"
					position={[-7, 1, 328.04]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={0.014}
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
				<group
					name="github_icon"
					position={[7.316, -2, 326.46]}
					rotation={[-Math.PI / 2, 0, 3.117]}
				>
					<group name="root001">
						<group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
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
	);
}

useGLTF.preload("/mainPOIPruned.glb");