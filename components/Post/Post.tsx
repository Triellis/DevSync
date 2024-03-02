import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import styles from "./Post.module.css";

function Post() {
	return (
		<div className={styles.main}>
			<div>
				<div>
					<ProfilePic />
					<div>
						<span>Name</span>
						<span>Username</span>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}

export default Post;
