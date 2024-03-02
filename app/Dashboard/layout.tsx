'use client'

import styles from "@/app/styles/page.module.css";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = useSession().data;
	const router = useRouter();

	if (!session) {
		console.log(session);
		router.push("/LandingPage");
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
