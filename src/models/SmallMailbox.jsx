/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, useRef } from "react";
import { useGLTF, useCursor, Html } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { useModalContext } from "../components/context/ModalContext";
import { useHoverContext } from "../components/context/HoverContext";
import ModalText from "../components/experience/ModalText";

export default function SmallMailbox(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF("/PrunedMailbox.glb");

	const [hovered, setHovered] = useState();
	const { signSelected, setSignSelected } = useModalContext();
	const { hoverText, setHoverText } = useHoverContext();
	const [mailboxText, setMailboxText] = useState("");

	useCursor(hovered);

	return (
		<group ref={group} {...props} dispose={null}>
			{mailboxText === "mailbox" && (
				<Html center position={[-15, 30, 650]}>
					<div
						style={{ userSelect: "none" }}
						className="flex flex-col justify-center items-center"
					>
						<p style={{ color: "#6ee06e", marginBottom: "-5px" }}>Email</p>
						<p style={{ color: "#6ee06e", marginBottom: "10px" }}>
							{"<bbabines@gmail.com>"}
						</p>
					</div>
				</Html>
			)}

			<group scale={1.75}>
				<ModalText text={"Contact"} position={[-2, 50, 380]} sign={"contact"} />
			</group>

			{/* Invisible Mailbox Physics  & Event Listeners*/}
			<RigidBody type="fixed" includeInvisible>
				<mesh
					position={[-14, 2, 647]}
					visible={false}
					onClick={() => {
						setSignSelected("contact");
					}}
					onPointerOver={() => {
						setHovered(true);
						setHoverText("contact");
						setMailboxText("mailbox");
						event.stopPropagation();
					}}
					onPointerOut={() => {
						setHovered(false);
						setHoverText("");
						setMailboxText("");
					}}
				>
					<boxGeometry args={[16, 20, 9]} />
					<meshStandardMaterial color="mediumpurple" />
				</mesh>
			</RigidBody>

			<group
				position={[-60, 2, 650]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={0.032}
			>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube003__0.geometry}
						material={materials["Scene_-_Root"]}
						position={[126.851, 271.501, 1442.32]}
						rotation={[-Math.PI / 2, -0.027, 0]}
						scale={100}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/PrunedMailbox.glb");
