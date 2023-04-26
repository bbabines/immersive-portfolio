import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import { useInput } from "./hooks/useInput";

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

// To off set movement direction for multiple buttons being pushed
const directionOffSet = ({ forward, backward, left, right }) => {
	// w with 0 as a stating point for the offset
	var directionOffSet = 0;

	if (forward) {
		// if pushing forward and left offset by the following to go diagonal
		if (left) {
			// w + a
			directionOffSet = Math.PI / 4;
		} else if (right) {
			//  w + d
			directionOffSet = -Math.PI / 4;
		}
	} else if (backward) {
		if (left) {
			// s + a
			directionOffSet = Math.PI / 4 + Math.PI / 2;
		} else if (right) {
			// s + d
			directionOffSet = Math.PI / 4 - Math.PI / 2;
		} else {
			// s
			directionOffSet = Math.PI;
		}
	} else if (left) {
		// a
		directionOffSet = Math.PI / 2;
	} else if (right) {
		// d
		directionOffSet = -Math.PI / 2;
	}

	return directionOffSet;
};

const MyPlayer = () => {
	const model = useGLTF("./MyPlayer.glb");
	const { actions } = useAnimations(model.animations, model.scene);

	const { forward, backward, left, right, jump, shift } = useInput();

	model.scene.traverse((object) => {
		if (object.isMesh) {
			object.castShadow = true;
		}
	});

	model.scene.scale.set[(0.5, 0.5, 0.5)];

	const currentAction = useRef("");
	const controlsRef = useRef();
	const camera = useThree((state) => state.camera);

	const updateCameraTarget = (moveX, moveZ) => {
		// Move camera
		camera.position.x += moveX;
		camera.position.z += moveZ;

		// Update camera taRGET
		cameraTarget.x = model.scene.position.x;
		cameraTarget.y = model.scene.position.y + 2;
		cameraTarget.z = model.scene.position.z;

		if (controlsRef.current) controlsRef.current.target = cameraTarget;
	};

	useEffect(() => {
		let action = "";

		if (forward || backward || left || right) {
			action = "walking";
			if (shift) {
				action = "running";
			}
			if (jump) {
				action = "jumping";
			}
		} else if (jump) {
			action = "jumping";
		} else {
			action = "Idle";
		}

		if (currentAction.current != action) {
			const nextActionToPlay = actions[action];
			const current = actions[currentAction.current];
			current?.fadeOut(0.2);
			nextActionToPlay?.reset().fadeIn(0.2).play();
			currentAction.current = action;
		}
	}, [forward, backward, left, right, jump, shift]);

	useFrame((state, delta) => {
		if (
			currentAction.current === "running" ||
			currentAction.current === "walking"
		) {
			// Calculate towards the camera direction
			let angleYCameraDirection = Math.atan2(
				camera.position.x - model.scene.position.x,
				camera.position.z - model.scene.position.z
			);

			// Diagonal movement angle offset
			let newDirectionOffSet = directionOffSet({
				forward,
				backward,
				left,
				right,
			});

			// Rotate model
			rotateQuarternion.setFromAxisAngle(
				rotateAngle,
				angleYCameraDirection + newDirectionOffSet
			);
			model.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);

			// Calculate walk direction
			camera.getWorldDirection(walkDirection);
			walkDirection.y = 0;
			walkDirection.normalize();
			walkDirection.applyAxisAngle(rotateAngle, newDirectionOffSet);

			// Run / Walk velocity
			const velocity = currentAction.current === "running" ? 10 : 5;

			// Move model & camera
			const moveX = walkDirection.x * velocity * delta;
			const moveZ = walkDirection.z * velocity * delta;
			model.scene.position.x += moveX;
			model.scene.position.z += moveZ;
			updateCameraTarget(moveX, moveZ);
		}
	});

	return (
		<>
			<OrbitControls ref={controlsRef} />
			<primitive object={model.scene} position={[-50, 1, 0]} />;
		</>
	);
};

export default MyPlayer;
