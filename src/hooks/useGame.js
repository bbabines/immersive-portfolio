import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
	subscribeWithSelector((set) => {
		return {
			// Initial animation
			currentAnimation: null,
			animationSet: {},

			initializeAnimationSet: (animationSet) => {
				set((state) => {
					if (Object.keys(state.animationSet).length === 0) {
						return { animationSet };
					}
					return {};
				});
			},

			idle: () => {
				set((state) => {
					return { currentAnimation: state.animationSet.idle };
				});
				console.log(state.animationSet.idle);
			},

			walk: () => {
				set((state) => {
					return { currentAnimation: state.animationSet.walking };
				});
			},

			run: () => {
				set((state) => {
					return { currentAnimation: state.animationSet.run };
				});
			},

			jump: () => {
				set((state) => {
					return { currentAnimation: state.animationSet.jumping };
				});
			},
		};
	})
);
