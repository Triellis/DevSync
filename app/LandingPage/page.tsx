"use client";

import LoginBtn from "@/components/LoginBtn";
import Logo from "../../components/Logo";
import styles from "./LandingPage.module.css";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
	const session = useSession().data;

	if (session) {
		redirect("/Dashboard");
	}

	return (
		<div className={styles.main}>
			<Logo fSize="84px" />

			<h1 className={styles.title}>Sync In. Stand Out.</h1>
			<LoginBtn />
		</div>
	);
}
