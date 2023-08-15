import { createContext, useContext, useState } from "react";

const HoverContext = createContext();

const HoverContextProvider = ({ children }) => {
	const [hoverText, setHoverText] = useState(null);

	return (
		<HoverContext.Provider value={{ hoverText, setHoverText }}>
			{children}
		</HoverContext.Provider>
	);
};

export default HoverContextProvider;

export const useHoverContext = () => {
	return useContext(HoverContext);
};
