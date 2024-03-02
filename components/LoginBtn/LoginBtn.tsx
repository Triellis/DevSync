'use client'

import Gh from "@/public/icons/Gh";
import React from "react";
import styles from "./LoginBtn.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function LoginBtn() {

	const router = useRouter();
	const { data: session } = useSession();

	if (session) {
		router.push("/Dashboard");
	}

	const handleLogin = async () => {
		try {
			const res = await signIn('github', {
				redirect: false,
			});

			if(res && !res.error) {
				router.push("/Dashboard");
			}

			if (res?.error) {
				console.log(res.error);
			}
		}
		catch (err) {
			console.log(err);
		}
	}

	return (
		<button className={styles.main} onClick={handleLogin}>
			<span>Login with GitHub</span>
			{/* import icon from public folder */}
			{/* <img src="./public/icons/Gh.svg" alt="github" /> */}
			<Gh />
		</button>
	);
}

export default LoginBtn;
