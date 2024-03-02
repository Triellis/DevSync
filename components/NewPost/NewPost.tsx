import ProfilePic from "@/components/ProfilePic/ProfilePic";
import Clip from "@/public/icons/Clip";
import { Button, Divider, IconButton, Input } from "@chakra-ui/react";
import React from "react";
import styles from "./NewPost.module.css";

function Post() {
	return (
		<div className={styles.main}>
			<div className={styles.msg}>
				<ProfilePic />
				<Input variant="unstyled" placeholder="Create new post" />
			</div>

			<Divider color={"#D6E8FF"} />

			<div className={styles.last}>
				{/* clipbtn */}
				<IconButton
					aria-label="clip"
					icon={<Clip />}
					bg={"transparent"}
					_hover={{ bg: "transparent" }}
				/>
				<Button className={styles.postBtn} size="sm">
					Post
				</Button>
			</div>
		</div>
	);
}

export default Post;
