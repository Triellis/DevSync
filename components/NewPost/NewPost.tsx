import ProfilePic from "@/components/ProfilePic/ProfilePic";
import Clip from "@/public/icons/Clip";
import { Button, Divider, IconButton, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import styles from "./NewPost.module.css";

function Post() {
	return (
		<div className={styles.main}>
			<div className={styles.msg}>
				<ProfilePic />
				<Textarea
					rows={2}
					variant="unstyled"
					placeholder="Create new post"
				/>
			</div>

			<Divider
				borderWidth={"1px"}
				borderColor={"rgba(214, 232, 255, 0.5)"}
			/>

			<div className={styles.last}>
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
