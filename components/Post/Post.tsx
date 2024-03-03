"use client";
import Bluetick from "@/public/icons/Bluetick";
import Comment from "@/public/icons/Comment";
import Like from "@/public/icons/Like";
import Liked from "@/public/icons/Liked";
import More from "@/public/icons/More";
import { Flex, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import styles from "./Post.module.css";

function Post({
	profilePicUrl,
	name,
	username,
	content,
	verified,
}: {
	profilePicUrl: string;
	name: string;
	username: string;
	content: string;
	verified: boolean;
}) {
	const [likeFill, setLikeFill] = useState(false);
	const [currLikes, setCurrLikes] = useState(12);
	const [currComments, setCurrComments] = useState(39);

	return (
		<div className={styles.main}>
			<div className={styles.me}>
				<div className={styles.head}>
					<ProfilePic sz="md" picUrl={profilePicUrl} />
					<div className={styles.names}>
						<Flex
							direction={"row"}
							gap={"10px"}
							fontWeight={"bold"}
						>
							<span>{name}</span>
							{verified ? <Bluetick /> : ""}
						</Flex>

						<span
							style={{
								color: "#536471",
							}}
						>
							@ {username}
						</span>
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

			<div className={styles.content}>{content}</div>

			<div className={styles.footer}>
				<div>
					<IconButton
						bg="transparent"
						_hover={{
							bg: "transparent",
						}}
						aria-label="more"
						icon={likeFill ? <Liked /> : <Like />}
						onClick={() => {
							setLikeFill(!likeFill);
							setCurrLikes(
								likeFill ? currLikes - 1 : currLikes + 1
							);
						}}
					/>
					<span>{currLikes}</span>
				</div>

				<div>
					<IconButton
						bg="transparent"
						_hover={{
							bg: "transparent",
						}}
						aria-label="more"
						icon={<Comment />}
					/>
					<span>{currComments}</span>
				</div>
			</div>
		</div>
	);
}

export default Post;
