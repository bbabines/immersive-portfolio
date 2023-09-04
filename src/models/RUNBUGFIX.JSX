// Effectively solves run bug but has a walking bug and performance issues.
const handleKeyPress = (event) => {
	let key = event.key;
	if (event.code === "Space") {
		key = "Space"; // assign a clearer string for spacebar
	}

	const newKeys = {
		...keysPressed,
		[key]: true,
		Shift: event.shiftKey,
	};
	setKeysPressed(newKeys);
};

// Effectively solves run bug
const handleKeyRelease = (event) => {
	let key = event.key;
	if (event.code === "Space") {
		key = "Space"; // assign a clearer string for spacebar
	}

	const newKeys = {
		...keysPressed,
		[key]: false,
		Shift: event.shiftKey,
	};
	setKeysPressed(newKeys);
};

// WALKING BUG & PERFORMANCE ISSUES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const handleKeyPress = (event) => {
// 	let key = event.key;

// 	if (event.code === "Space") {
// 		key = "Space"; // assign a clearer string for spacebar
// 	}

// 	if (keysOfInterest.includes(key) || key === "Space") {
// 		const newKeys = {
// 			...keysPressed,
// 			[key]: true,
// 			Shift: event.shiftKey,
// 		};
// 		setKeysPressed(newKeys);
// 	}
// };

// const handleKeyRelease = (event) => {
// 	let key = event.key;

// 	if (event.code === "Space") {
// 		key = "Space"; // assign a clearer string for spacebar
// 	}

// 	if (keysOfInterest.includes(key) || key === "Space") {
// 		const newKeys = {
// 			...keysPressed,
// 			[key]: false,
// 			Shift: event.shiftKey,
// 		};
// 		setKeysPressed(newKeys);
// 	}
// };

// WALKING BUG & PERFORMANCE ISSUES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
