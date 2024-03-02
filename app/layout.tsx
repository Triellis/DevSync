import type { Metadata } from "next";
import { Cabin } from "next/font/google";

import { Providers } from "./providers";
import "./styles/globals.css";
import styles from "./styles/page.module.css";

const font = Cabin({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Providers>
					<div className={styles.children}>{children}</div>

					{/* <Footer /> */}
				</Providers>
			</body>
		</html>
	);
}
