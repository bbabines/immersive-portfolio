import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Brad's Immersive Portfolio",
	description: "An immersive experience of a portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
