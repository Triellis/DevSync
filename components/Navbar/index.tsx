import Logo from "@/components/Logo";
import { Center, Divider, IconButton } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<div className={styles.main}>
			<a href="/home">
				<Logo fSize="16px" />
			</a>

			{/* nav buttons */}
			<div>{/* <IconButton /> */}</div>
		</div>
	);
}

export default Navbar;
