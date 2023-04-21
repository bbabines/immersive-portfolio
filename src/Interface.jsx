import { useKeyboardControls } from "@react-three/drei";

const Interface = () => {
	const forward = useKeyboardControls((state) => state.forward);
	const rightward = useKeyboardControls((state) => state.rightward);
	const backward = useKeyboardControls((state) => state.backward);
	const leftward = useKeyboardControls((state) => state.leftward);
	const jump = useKeyboardControls((state) => state.jump);

	return (
		<div className="interface">
			<div className="controls">
				<div className="raw">
					<div className={`key ${forward ? "active" : null}`}></div>
				</div>

				<div className="raw">
					<div className={`key ${leftward ? "active" : null}`}></div>
					<div className={`key ${backward ? "active" : null}`}></div>
					<div className={`key ${rightward ? "active" : null}`}></div>
				</div>

				<div className="raw">
					<div className={`key large ${jump ? "active" : null}`}></div>
				</div>
			</div>
		</div>
	);
};

export default Interface;
