"use client";

import Gh from "@/public/icons/Gh";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./LoginBtn.module.css";

function LoginBtn() {
	const router = useRouter();
	const { data: session } = useSession();

	if (session) {
		router.push("/Dashboard");
	}

	const handleLogin = async () => {
		try {
			const res = await signIn("github", {
				redirect: false,
			});

			if (res && !res.error) {
				router.push("/Dashboard");
			}

			if (res?.error) {
				console.log(res.error);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<button className={styles.main} onClick={handleLogin}>
			<span>Login with GitHub</span>
			<Gh />
		</button>
	);
}

export default LoginBtn;
