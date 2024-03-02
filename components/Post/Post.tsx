import More from "@/public/icons/More";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import styles from "./Post.module.css";

function Post({ content }: { content: string }) {
	return (
		<div className={styles.main}>
			<div className={styles.me}>
				<div className={styles.head}>
					<ProfilePic sz="md" />
					<div className={styles.names}>
						<div>NAME</div>
						<div>username</div>
					</div>
				</div>

				<div className={styles.more}>
					<IconButton
						aria-label="more"
						bg={"transparent"}
						_hover={{ bg: "transparent" }}
						icon={<More />}
					/>
				</div>
			</div>

			{/* content */}
			<div className={styles.content}>{content}</div>
		</div>
	);
}

export default Post;
