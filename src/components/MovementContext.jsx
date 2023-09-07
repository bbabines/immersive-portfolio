import { createContext, useContext, useState } from "react";

const MovementContext = createContext();

const MovementContextProvider = ({ children }) => {
	const [movement, setMovement] = useState({
		leftward: false,
		rightward: false,
		forward: false,
		backward: false,
	});

	return (
		<MovementContext.Provider value={{ movement, setMovement }}>
			{children}
		</MovementContext.Provider>
	);
};

export default MovementContextProvider;

export const useMovementContext = () => {
	return useContext(MovementContext);
};
