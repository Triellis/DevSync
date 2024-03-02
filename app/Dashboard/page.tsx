import NewPost from "@/components/NewPost";
import { Divider, Input } from "@chakra-ui/react";
import React from "react";
import styles from "./Dashboard.module.css";

async function page() {
	return (
		<div className={styles.main}>
			<div className={styles.newPost}>
				<NewPost />
			</div>
		</div>
	);
}

export default page;
