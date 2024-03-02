"use client";

import Gh from "@/public/icons/Gh";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import styles from "./LoginBtn.module.css";

function LoginBtn() {

	const handleLogin = async () => {
		try {
			const res = await signIn("github", {
				redirect: false,
			});

			if (res && !res.error) {
				redirect("/Dashboard");
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
