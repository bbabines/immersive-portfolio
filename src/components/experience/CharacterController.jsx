"use client";

import { useState, useRef } from "react";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";

import PortfolioAvatar from "@/models/PortfolioAvatar";

const CharacterController = () => {
	const characterRef = useRef();

	return (
		<>
			<RigidBody
				colliders={false}
				friction={-0.5}
				// position={[0, 0, 0]}
				ref={characterRef}
				// type="fixed"
			>
				<CapsuleCollider args={[0.7, 0.3]} position={[2, 3.0, 2]} />
				<group position={[2, 2, 2]}>
					<PortfolioAvatar />
				</group>
			</RigidBody>
		</>
	);
};

export default CharacterController;
