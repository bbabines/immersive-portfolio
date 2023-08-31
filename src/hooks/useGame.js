import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
	subscribeWithSelector((set) => {
		return {
			/**
			 * Character animations state manegement
			 */
			// Initial animation
			curAnimation: null,
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
					if (state.curAnimation === state.animationSet.jumpIdle) {
						return { curAnimation: state.animationSet.jumpLand };
					} else if (state.curAnimation !== state.animationSet.wave) {
						return { curAnimation: state.animationSet.idle };
					}
					return {};
				});
			},

			walk: () => {
				set((state) => {
					return { curAnimation: state.animationSet.walk };
				});
			},

			run: () => {
				set((state) => {
					return { curAnimation: state.animationSet.run };
				});
			},

			jump: () => {
				set((state) => {
					return { curAnimation: state.animationSet.jump };
				});
			},

			/**
			 * Additional animations
			 */
			// triggleFunction: ()=>{
			//    set((state) => {
			//        return { curAnimation: state.animationSet.additionalAnimation };
			//    });
			// }
		};
	})
);
