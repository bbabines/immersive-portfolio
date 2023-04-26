import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
	<Canvas
		shadows
		camera={{
			fov: 45,
			near: 0.1,
			far: 800,
			position: [-70, 20, 10],
		}}
	>
		<Experience />
		{/* <Interface /> */}
	</Canvas>
);
