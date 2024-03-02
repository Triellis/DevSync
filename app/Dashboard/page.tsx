import NewPost from "@/components/NewPost";
import Post from "@/components/Post/Post";

import React from "react";
import styles from "./Dashboard.module.css";

function page() {
	return (
		<div className={styles.main}>
			<div className={styles.newPost}>
				<NewPost />
			</div>

			<div className={styles.post}>
				<Post
					name={"Lee Robinson"}
					username="Utsav19"
					profilePicUrl="https://avatars.githubusercontent.com/u/9113740?v=4"
					content="I am just excited!"
				/>
				<Post
					name={"Utsav Raithatha"}
					username="Utsav19"
					profilePicUrl="https://avatars.githubusercontent.com/u/9113740?v=4"
					content="I am just excited!"
				/>
				<Post
					name={"Utsav Raithatha"}
					username="Utsav19"
					profilePicUrl="https://avatars.githubusercontent.com/u/9113740?v=4"
					content="I am just excited!"
				/>
				<Post
					name={"Utsav Raithatha"}
					username="Utsav19"
					profilePicUrl="https://avatars.githubusercontent.com/u/9113740?v=4"
					content="I am just excited!"
				/>
			</div>
		</div>
	);
}

export default page;
