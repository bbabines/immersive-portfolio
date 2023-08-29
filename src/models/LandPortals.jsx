/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState } from "react";
import { useGLTF, useCursor, Html } from "@react-three/drei";

import { useModalContext } from "../components/ModalContext";
import { useHoverContext } from "../components/HoverContext";
import ModalText from "../components/experience/ModalText";

export default function LandPortals(props) {
	const { nodes, materials } = useGLTF("/land-portals.glb");

	const [hovered, setHovered] = useState();
	const { signSelected, setSignSelected } = useModalContext();
	const { hoverText, setHoverText } = useHoverContext();

	useCursor(hovered);

	return (
		<group {...props} dispose={null}>
			<group name="Scene">
				{/* Contact */}
				<ModalText
					text={"contact"}
					position={[50.357, 8, -77.398]}
					sign={"contact"}
				/>
				<mesh
					name="Cube052"
					castShadow
					receiveShadow
					geometry={nodes.Cube052.geometry}
					material={materials.Mailbox}
					position={[50.357, 0, -77.398]}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={1.695}
					onClick={() => {
						setSignSelected("contact");
					}}
					onPointerOver={() => {
						setHovered(true);
						setHoverText("contact");
						event.stopPropagation(); // Prevent event propagation
					}}
					onPointerOut={() => {
						setHovered(false);
						setHoverText("");
					}}
				/>

				{/* House */}
				{/* <ModalText
					text={"about"}
					position={[-29.576, 8, -0.223]}
					sign={"house"}
				/>
				<mesh
					name="Icosphere006"
					castShadow
					receiveShadow
					geometry={nodes.Icosphere006.geometry}
					material={materials.House}
					position={[-29.576, 0, -0.223]}
					rotation={[0.014, 0.767, -0.025]}
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
				/> */}

				{/* Middle Sign */}
				<ModalText
					text={"more projects"}
					position={[44.045, 9, 0.252]}
					sign={"all-projects"}
				/>

				{/* All Projects - Image overlay */}

				<Html
					// occlude
					transform
					distanceFactor={15}
					position={[42.5, 3.5, 0.3, 0]}
					rotation={[0, Math.PI * -0.5, 0]}
					// scale={[0.13, 0.07, 0.1]}
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
					name="Cube046"
					castShadow
					receiveShadow
					geometry={nodes.Cube046.geometry}
					material={materials.Billboard}
					position={[44.045, 0, 0.252]}
					rotation={[0, -1.561, 0]}
					scale={1.5}
					onClick={() => {
						setSignSelected("all-projects");
					}}
					// onPointerOver={() => {
					// 	setHovered(true);
					// 	setHoverText("all-projects");
					// 	event.stopPropagation(); // Prevent event propagation
					// }}
					// onPointerOut={() => {
					// 	setHovered(false);
					// 	setHoverText("");
					// }}
				/>

				{/* Back Right Sign */}
				<ModalText
					text={"Marble Madness"}
					position={[40.057, 7, 16]}
					sign={"back-right"}
				/>

				{/* Three.js - Project 2 - Image overlay */}

				<Html
					// occlude
					transform
					// distanceFactor={15}
					position={[39.7, 2.6, 15.5]}
					rotation={[0, Math.PI * -0.5, 0]}
					// scale={[2.04, 1.11, 0.1]}
				>
					<img
						src="/marble.png"
						alt="project thumbnail"
						className="w-[300px] cursor-pointer rounded-lg"
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

				<mesh
					name="Cube047"
					castShadow
					receiveShadow
					geometry={nodes.Cube047.geometry}
					material={materials["Portrait Billboard"]}
					position={[40.057, 0, 15.736]}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={1.25}
					onClick={() => {
						setSignSelected("three-two");
					}}
					// onPointerOver={() => {
					// 	setHovered(true);
					// 	setHoverText("back-right");
					// 	event.stopPropagation(); // Prevent event propagation
					// }}
					// onPointerOut={() => {
					// 	setHovered(false);
					// 	setHoverText("");
					// }}
				/>

				{/* Front Right Sign */}
				<ModalText
					text={"Legends of Aetheria"}
					position={[25.386, 6, 25.463]}
					sign={"front-right"}
				/>

				{/* Three.js - Project 1 - Image overlay */}

				<Html
					// occlude
					transform
					// distanceFactor={15}
					position={[25, 3, 25]}
					rotation={[0, Math.PI * -0.5, 0]}
					// scale={[0.04, 0.12, 0.1]}
				>
					<img
						src="/rpg.png"
						alt="project thumbnail"
						className="w-[300px] cursor-pointer rounded-lg"
						onClick={() => {
							setSignSelected("three-one");
						}}
						onPointerOver={() => {
							setHovered(true);
							setHoverText("front-right");
							event.stopPropagation(); // Prevent event propagation
						}}
						onPointerOut={() => {
							setHovered(false);
							setHoverText("");
						}}
					/>
				</Html>

				<mesh
					name="Cube048"
					castShadow
					receiveShadow
					geometry={nodes.Cube048.geometry}
					material={materials["Portrait Billboard"]}
					position={[25.386, 0, 25.463]}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={1.25}
					onClick={() => {
						setSignSelected("three-one");
					}}
					// onPointerOver={() => {
					// 	setHovered(true);
					// 	setHoverText("front-right");
					// 	event.stopPropagation(); // Prevent event propagation
					// }}
					// onPointerOut={() => {
					// 	setHovered(false);
					// 	setHoverText("");
					// }}
				/>

				{/* Back Left Sign */}
				<ModalText
					text={"Ikon Clothing"}
					position={[40.003, 7, -13]}
					sign={"back-left"}
				/>

				{/* React - Project 2 - Image overlay */}

				<Html
					// occlude
					transform
					// distanceFactor={15}
					position={[39.7, 2.6, -14.641]}
					rotation={[0, Math.PI * -0.5, 0]}
					// scale={[0.04, 0.14, 0.1]}
				>
					<img
						src="/ikon.png"
						alt="project thumbnail"
						className="w-[300px] cursor-pointer rounded-lg"
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

				<mesh
					name="Cube049"
					castShadow
					receiveShadow
					geometry={nodes.Cube049.geometry}
					material={materials["Portrait Billboard"]}
					position={[40.003, 0, -14.641]}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={1.25}
					onClick={() => {
						setSignSelected("react-two");
					}}
					// onPointerOver={() => {
					// 	setHovered(true);
					// 	setHoverText("back-left");
					// 	event.stopPropagation(); // Prevent event propagation
					// }}
					// onPointerOut={() => {
					// 	setHovered(false);
					// 	setHoverText("");
					// }}
				/>

				{/* Front Left Sign */}
				<ModalText
					text={"Kubera Link"}
					position={[25.496, 6, -23]}
					sign={"font-left"}
				/>

				{/* React - Project 1 - Image overlay */}

				<Html
					// occlude
					transform
					// distanceFactor={15}
					position={[25.2, 2.6, -24.454]}
					rotation={[0, Math.PI * -0.5, 0]}
					// scale={[0.04, 0.06, 0.1]}
				>
					<img
						src="/kubera.png"
						alt="project thumbnail"
						className="w-[300px] cursor-pointer rounded-lg"
						onClick={() => {
							setSignSelected("react-one");
						}}
						onPointerOver={() => {
							setHovered(true);
							setHoverText("font-left");
							event.stopPropagation(); // Prevent event propagation
						}}
						onPointerOut={() => {
							setHovered(false);
							setHoverText("");
						}}
					/>
				</Html>

				<mesh
					name="Cube050"
					castShadow
					receiveShadow
					geometry={nodes.Cube050.geometry}
					material={materials["Portrait Billboard"]}
					position={[25.496, 0, -24.454]}
					rotation={[-Math.PI, 0, -Math.PI]}
					scale={1.25}
					onClick={() => {
						setSignSelected("react-one");
					}}
					// onPointerOver={() => {
					// 	setHovered(true);
					// 	setHoverText("font-left");
					// 	event.stopPropagation(); // Prevent event propagation
					// }}
					// onPointerOut={() => {
					// 	setHovered(false);
					// 	setHoverText("");
					// }}
				/>
				<mesh
					name="Prefab_TreeFallen"
					castShadow
					receiveShadow
					geometry={nodes.Prefab_TreeFallen.geometry}
					material={materials.M_TreeFallen}
					position={[62.046, 1.021, -55.184]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.023}
				/>
				<mesh
					name="Prefab_Tent"
					castShadow
					receiveShadow
					geometry={nodes.Prefab_Tent.geometry}
					material={materials.M_Tent}
					position={[72.957, 0, -63.896]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.051}
				/>
				<group
					name="Birch_01_LOD1"
					position={[-32.156, 0, -45.906]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="Scene007"
						castShadow
						receiveShadow
						geometry={nodes.Scene007.geometry}
						material={materials["M_TreeBirch_Leaves.001"]}
					/>
					<mesh
						name="Scene007_1"
						castShadow
						receiveShadow
						geometry={nodes.Scene007_1.geometry}
						material={materials["M_TreeBirch_Bark.001"]}
					/>
				</group>
				<group
					name="Prefab_TreeLarge_03"
					position={[-24.162, -3.059, 164.123]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<group
						name="Tree_Large_03_LOD2"
						position={[170.043, -12959.169, -372.008]}
					>
						<mesh
							name="Scene010"
							castShadow
							receiveShadow
							geometry={nodes.Scene010.geometry}
							material={materials.M_TreeLarge_Leaves}
						/>
						<mesh
							name="Scene010_1"
							castShadow
							receiveShadow
							geometry={nodes.Scene010_1.geometry}
							material={materials.M_TreeLarge_Bark}
						/>
					</group>
					<group
						name="Tree_Large_03_LOD2001"
						position={[7196.109, -19334.398, -285.663]}
					>
						<mesh
							name="Scene039"
							castShadow
							receiveShadow
							geometry={nodes.Scene039.geometry}
							material={materials.M_TreeLarge_Leaves}
						/>
						<mesh
							name="Scene039_1"
							castShadow
							receiveShadow
							geometry={nodes.Scene039_1.geometry}
							material={materials.M_TreeLarge_Bark}
						/>
					</group>
					<group
						name="Tree_Large_03_LOD2002"
						position={[2927.774, -23719.857, -301.951]}
					>
						<mesh
							name="Scene040"
							castShadow
							receiveShadow
							geometry={nodes.Scene040.geometry}
							material={materials.M_TreeLarge_Leaves}
						/>
						<mesh
							name="Scene040_1"
							castShadow
							receiveShadow
							geometry={nodes.Scene040_1.geometry}
							material={materials.M_TreeLarge_Bark}
						/>
					</group>
					<group
						name="Tree_Large_03_LOD2003"
						position={[9219.305, -14431.005, -300.274]}
					>
						<mesh
							name="Scene041"
							castShadow
							receiveShadow
							geometry={nodes.Scene041.geometry}
							material={materials.M_TreeLarge_Leaves}
						/>
						<mesh
							name="Scene041_1"
							castShadow
							receiveShadow
							geometry={nodes.Scene041_1.geometry}
							material={materials.M_TreeLarge_Bark}
						/>
					</group>
				</group>
				<mesh
					name="Prefab_RuneRock_02"
					castShadow
					receiveShadow
					geometry={nodes.Prefab_RuneRock_02.geometry}
					material={materials.M_Rocks_Rune_02}
					position={[-43.682, -0.164, 28.895]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.015}
				/>
				<mesh
					name="Prefab_TreeFallen_Coverage"
					castShadow
					receiveShadow
					geometry={nodes.Prefab_TreeFallen_Coverage.geometry}
					material={materials.M_TreeFallen}
					position={[84.175, 0.962, -74.745]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.031}
				/>
				<mesh
					name="Prefab_RuneRock_01"
					castShadow
					receiveShadow
					geometry={nodes.Prefab_RuneRock_01.geometry}
					material={materials.M_Rocks_Rune_02}
					position={[-59.958, 0, 16.566]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.011}
				/>
				<group
					name="Prefab_StoneSmall_05"
					position={[4.431, 5.735, 132.384]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="SM_Stone_05_LOD0"
						castShadow
						receiveShadow
						geometry={nodes.SM_Stone_05_LOD0.geometry}
						material={materials.M_Rocks_Group}
						position={[-4740.303, -12431.45, 491.774]}
						scale={1.079}
					/>
					<mesh
						name="SM_Stone_05_LOD1"
						castShadow
						receiveShadow
						geometry={nodes.SM_Stone_05_LOD1.geometry}
						material={materials.M_Rocks_Group}
						position={[7244.122, -18116.547, 444.085]}
						scale={3.963}
					/>
				</group>
				<mesh
					name="Prefab_TreeStump_01"
					castShadow
					receiveShadow
					geometry={nodes.Prefab_TreeStump_01.geometry}
					material={materials.M_TreeStump}
					position={[65.839, 0, 42.685]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.026}
				/>

				{/* Sign */}
				<mesh
					name="Prefab_WoodSign_01"
					castShadow
					receiveShadow
					geometry={nodes.Prefab_WoodSign_01.geometry}
					material={materials.M_WoodSign}
					position={[-5.655, 0, -33.793]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				/>
				<group
					name="Prefab_Potion"
					position={[-9.124, 2.574, 125.273]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="SM_Cap_01"
						castShadow
						receiveShadow
						geometry={nodes.SM_Cap_01.geometry}
						material={materials.M_Cap}
						position={[0, 0, -54.47]}
					>
						<group name="GameObject" />
					</mesh>
					<mesh
						name="SM_Potion_01"
						castShadow
						receiveShadow
						geometry={nodes.SM_Potion_01.geometry}
						material={materials.M_Potion_01}
						position={[8172.27, -17940.125, 222.731]}
						scale={4.212}
					/>
				</group>
				<group
					name="Prefab_RockFormation_01"
					position={[13.592, 5.735, 164.627]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				/>
				<group
					name="PortalTwo"
					position={[30.148, 2.842, 146.734]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="Cylinder_002"
						castShadow
						receiveShadow
						geometry={nodes.Cylinder_002.geometry}
						material={materials.PortalTwo_Albedo}
						position={[10588.436, -2178.785, 294.702]}
						scale={6.649}
					/>
				</group>
				<group
					name="PortalThree"
					position={[26.938, 2.742, 143.969]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				/>
				<group
					name="PT_Menhir_Rock_02"
					position={[33.907, 1.463, 164.712]}
					rotation={[Math.PI / 2, 0, -2.734]}
					scale={0.01}
				>
					<mesh
						name="PT_Menhir_Rock_02_LOD0"
						castShadow
						receiveShadow
						geometry={nodes.PT_Menhir_Rock_02_LOD0.geometry}
						material={materials.Default_Material}
						position={[5611.073, 24515.945, 150.61]}
						scale={4.181}
					/>
					<mesh
						name="PT_Menhir_Rock_02_LOD1"
						castShadow
						receiveShadow
						geometry={nodes.PT_Menhir_Rock_02_LOD1.geometry}
						material={materials.Default_Material}
						position={[2884.857, 23584.053, 124.499]}
						scale={7.281}
					/>
				</group>
				<group
					name="PortalTen"
					position={[23.159, 3.087, 140.763]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="Cylinder_010"
						castShadow
						receiveShadow
						geometry={nodes.Cylinder_010.geometry}
						material={materials.PortalSix_2_Albedo}
						position={[-1363.358, -29273.596, 303.146]}
						scale={7.958}
					/>
				</group>
				<group
					name="PortalSix"
					position={[17.43, 5.136, 136.063]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="Cylinder_010_1"
						castShadow
						receiveShadow
						geometry={nodes.Cylinder_010_1.geometry}
						material={materials.PortalSix_2_Albedo}
						position={[-17431.531, -1093.791, 547.881]}
						scale={7.624}
					/>
				</group>
				<group
					name="PortalSeven"
					position={[17.985, 6.936, 142.111]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="Cylinder_012"
						castShadow
						receiveShadow
						geometry={nodes.Cylinder_012.geometry}
						material={materials.PortalSeven_Albedo}
						position={[-17785.678, -27864.023, 726.069]}
						scale={6.022}
					/>
				</group>
				<group
					name="PortalOne"
					position={[33.018, -0.102, 153.585]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="Cylinder"
						castShadow
						receiveShadow
						geometry={nodes.Cylinder.geometry}
						material={materials.PortalOne_Albedo}
						position={[10718.88, -29313.422, -10.937]}
						scale={5.139}
					/>
				</group>
				<group
					name="PortalFour"
					position={[24.352, 6.936, 143.723]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="Cylinder_006"
						castShadow
						receiveShadow
						geometry={nodes.Cylinder_006.geometry}
						material={materials.PortalFour_Albedo}
						position={[14526.911, -15093.161, 708.866]}
						scale={13.22}
					/>
				</group>
				<group
					name="PortalEight"
					position={[27.96, 6.936, 149.168]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="BezierCurve_003"
						castShadow
						receiveShadow
						geometry={nodes.BezierCurve_003.geometry}
						material={materials.PortalEight_Albedo}
						position={[-18842.172, -14859.888, 754.496]}
						scale={8.156}
					/>
				</group>
				<group
					name="PortalFive"
					position={[25.782, 6.936, 146.859]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				/>
				<group
					name="Birch_01_LOD1001"
					position={[-45.237, 0, 15.542]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="Scene002"
						castShadow
						receiveShadow
						geometry={nodes.Scene002.geometry}
						material={materials["M_TreeBirch_Leaves.001"]}
					/>
					<mesh
						name="Scene002_1"
						castShadow
						receiveShadow
						geometry={nodes.Scene002_1.geometry}
						material={materials["M_TreeBirch_Bark.001"]}
					/>
				</group>
				<group
					name="Birch_01_LOD1002"
					position={[67.092, -2.115, -1.899]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="Scene038"
						castShadow
						receiveShadow
						geometry={nodes.Scene038.geometry}
						material={materials["M_TreeBirch_Leaves.001"]}
					/>
					<mesh
						name="Scene038_1"
						castShadow
						receiveShadow
						geometry={nodes.Scene038_1.geometry}
						material={materials["M_TreeBirch_Bark.001"]}
					/>
				</group>
				<group
					name="Birch_01_LOD1003"
					position={[51.609, -0.063, 41.134]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.01}
				>
					<mesh
						name="Scene042"
						castShadow
						receiveShadow
						geometry={nodes.Scene042.geometry}
						material={materials["M_TreeBirch_Leaves.001"]}
					/>
					<mesh
						name="Scene042_1"
						castShadow
						receiveShadow
						geometry={nodes.Scene042_1.geometry}
						material={materials["M_TreeBirch_Bark.001"]}
					/>
				</group>
				<mesh
					name="Plane"
					castShadow
					receiveShadow
					geometry={nodes.Plane.geometry}
					material={materials["Grass and stones"]}
					scale={190.287}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/land-portals.glb");
