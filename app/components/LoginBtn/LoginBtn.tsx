import { Button } from "@chakra-ui/react";
import React from "react";
import styles from "./LoginBtn.module.css";

function LoginBtn() {
	return (
		<button className={styles.main}>
			<span>Login with GitHub</span>
			{/* import icon from public folder */}
			<img src="./public/icons/Gh.svg" alt="github" />
		</button>
	);
}

export default LoginBtn;
