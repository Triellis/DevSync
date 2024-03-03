"use client";

import LoginBtn from "@/components/LoginBtn";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Logo from "../../components/Logo";
import styles from "./LandingPage.module.css";

export default function Home() {
	const { data: session, status } = useSession();

	if (status == "authenticated") {
		redirect("/Dashboard");
	}

	return (
		<div className={styles.main}>
			<div className={styles.block}>
				<Logo fSize="84px" />

				<h1 className={styles.title}>Sync In. Stand Out.</h1>
				<LoginBtn />
			</div>

			<div className={styles.bottomTxt}>
				<span>Music is in sync with video.</span>
				<span>
					Developers are in sync with{" "}
					<span className={styles.col}>open source</span> communities{" "}
				</span>
			</div>
		</div>
	);
}
