import styles from "@/app/styles/page.module.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Cabin } from "next/font/google";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div className={styles.nav}>
				<Navbar />
			</div>
			<div>{children}</div>
		</div>
	);
}
