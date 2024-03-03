'use client'

import ProfilePic from "@/components/ProfilePic/ProfilePic";
import Clip from "@/public/icons/Clip";
import { Button, Divider, IconButton, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import styles from "./NewPost.module.css";
import { useState, useEffect } from "react";
import { useCookies } from "next-client-cookies";

function Post() {

	const [text, setText] = useState("");
	const cookies = useCookies();
	const username = cookies?.get("username")!;

	const handlePost = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		try {
			const res = await fetch("/api/posts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					text,
				}),
			});

			setText("");	
		}
		catch (err) {
			console.log(err);
		}
	}

	const handleTextChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	}

	return (
		<div className={styles.main}>
			<div className={styles.msg}>
				<ProfilePic />
				<Textarea
					rows={2}
					variant="unstyled"
					placeholder="Create new post"
					onChange={(e)=>handleTextChange(e)}
					value={text}
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
				<Button className={styles.postBtn} size="sm" onClick={(e)=>handlePost(e)}>
					Post
				</Button>
			</div>
		</div>
	);
}

export default Post;
