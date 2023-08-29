import { Billboard, Center, Text3D } from "@react-three/drei";

import { useHoverContext } from "@/components/HoverContext";

const ModalText = ({ text, sign, position }) => {
	const { hoverText } = useHoverContext();

	return (
		<Billboard position={position}>
			<Center>
				<Text3D font="/Inter_Bold.json" scale={10}>
					{text}
					{hoverText === sign ? (
						<meshNormalMaterial />
					) : (
						<meshBasicMaterial color={"orange"} />
					)}
				</Text3D>
			</Center>
		</Billboard>
	);
};

export default ModalText;
