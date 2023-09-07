import { createContext, useContext, useState } from "react";

const AnimationContext = createContext();

const AnimationContextProvider = ({ children }) => {
	const [characterAnimationState, setCharacterAnimationState] =
		useState("idle");

	return (
		<AnimationContext.Provider
			value={{ characterAnimationState, setCharacterAnimationState }}
		>
			{children}
		</AnimationContext.Provider>
	);
};

export default AnimationContextProvider;

export const useAnimationContext = () => {
	return useContext(AnimationContext);
};
