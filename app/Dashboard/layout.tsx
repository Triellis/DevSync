'use client'

import styles from "@/app/styles/page.module.css";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = useSession().data;

	if (!session) {
		redirect("/LandingPage");
	}

	return (
		<>
			<div className={styles.nav}>
				<Navbar />
			</div>
			{children}
		</>
	);
}
