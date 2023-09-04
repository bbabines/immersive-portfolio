/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				leftGlow: "-4px 4px 14px 0 rgba(234, 184, 26, 0.69)", // Adjusted X and Y to 4px each.
				rightGlow: "4px 4px 14px 0 rgba(234, 184, 26, 0.69)", // Adjusted X and Y to 4px each.
			},
		},
	},
	plugins: [],
};
