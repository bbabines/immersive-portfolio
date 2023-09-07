import { create } from "zustand";
import { subscribeWithSelector, devtools } from "zustand/middleware";

const useAnimationStore = create(
	devtools((set) => ({
		animationState: "idle",

		setAnimationState: (value) => set({ animationState: value }),
	}))
);

export default useAnimationStore;
