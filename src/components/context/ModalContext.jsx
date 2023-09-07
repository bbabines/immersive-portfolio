import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
	const [signSelected, setSignSelected] = useState("");

	return (
		<ModalContext.Provider value={{ signSelected, setSignSelected }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;

export const useModalContext = () => {
	return useContext(ModalContext);
};
