import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/page";
import { Providers } from "./providers";
import "./styles/globals.css";
import styles from "./styles/page.module.css";

const font = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
	// title: "Create Next App",
	// description: "Generated by create next app",
	openGraph: {
		title: "",
		description: "",
		images: {
			url: "/icons/metaicon.png", // Must be an absolute URL
			width: 91,
			height: 90,
		},
		url: "",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Providers>
					<div>
						<Navbar />
					</div>
					<div className={styles.children}>{children}</div>

					{/* <Footer /> */}
				</Providers>
			</body>
		</html>
	);
}
