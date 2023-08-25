export default function Lights({ timeOfDay }) {
	return (
		<>
			<directionalLight
				castShadow
				position={[-4, 10, 1]}
				intensity={timeOfDay === "Night" ? 0.2 : 2.5}
				shadow-mapSize={[1024, 1024]}
				shadow-camera-near={1}
				shadow-camera-far={10}
				shadow-camera-top={10}
				shadow-camera-right={10}
				shadow-camera-bottom={-10}
				shadow-camera-left={-10}
			/>
			<ambientLight intensity={0.5} castShadow />
		</>
	);
}
