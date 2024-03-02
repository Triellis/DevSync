import NewPost from "@/components/NewPost";
import Post from "@/components/Post/Post";
import { Divider, Input } from "@chakra-ui/react";
import React from "react";
import styles from "./Dashboard.module.css";

async function page() {
	return (
		<div className={styles.main}>
			<div className={styles.newPost}>
				<NewPost />
			</div>

			<div>
				<Post />
			</div>
		</div>
	);
}

export default page;
