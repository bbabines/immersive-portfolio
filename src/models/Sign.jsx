import React, { useRef, useState } from "react";
import { useGLTF, Html, Float, Text } from "@react-three/drei";

import SignModal from "../components/SignModal";

export function Sign(props) {
	const { nodes, materials } = useGLTF("/billboard.glb");

	// Video functions
	const videoRef = useRef();
	const handleProjectEnter = () => {
		videoRef.current.play();
	};
	const handleProjectLeave = () => {
		videoRef.current.pause();
	};

	// Modal functions
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]} position={[-50, 2, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<group
						occluded
						position={[-0.84, 6.33, 4.41]}
						rotation={[1.57, 0, 0]}
						scale={[3.69, 8.09, 2.08]}
					>
						<Float>
							<Text
								rotation={[30, 0, 0]}
								position={[0, -0.5, -5]}
								color={"black"}
							>
								Marble Race Madness
							</Text>
						</Float>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_4.geometry}
							material={materials["Material.002"]}
						/>

						<Html
							className="html-container"
							occlude
							transform
							distanceFactor={15}
							position={[0, 0.001, 0]}
							rotation={[Math.PI / 2, Math.PI / 1, Math.PI / 1]}
						>
							<video
								width={55}
								height={56}
								muted
								loop
								ref={videoRef}
								onMouseEnter={handleProjectEnter}
								onMouseLeave={handleProjectLeave}
								className="project"
								onClick={handleOpen}
							>
								<source src="/project.mp4" type="video/mp4" />
							</video>
							<SignModal
								open={open}
								handleOpen={handleOpen}
								handleClose={handleClose}
							/>
						</Html>
					</group>
					<group position={[-0.83, 2.06, 4.21]} scale={[0.22, 2.21, 0.22]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_6.geometry}
							material={materials["bb_trim.002"]}
						/>
					</group>
					<group position={[-0.91, 4.25, 4.89]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_8.geometry}
							material={materials.bb_trim}
						/>
					</group>
					<group
						position={[-0.86, 6.34, 4.24]}
						rotation={[1.57, 0, -Math.PI]}
						scale={[1, 2.47, 1]}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_10.geometry}
							material={materials["bb_trim.002"]}
						/>
					</group>
					<group position={[2.4, 4.37, 4.8]} scale={2.1}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_12.geometry}
							material={materials["bb_trim.002"]}
						/>
					</group>
					<group
						position={[2.89, 1.64, 4.67]}
						rotation={[0, 1.56, -1.55]}
						scale={0.63}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_14.geometry}
							material={materials["bb_trim.002"]}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/billboard.glb");
