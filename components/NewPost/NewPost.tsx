"use client";

import ProfilePic from "@/components/ProfilePic/ProfilePic";
import Clip from "@/public/icons/Clip";
import { Button, Divider, IconButton, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import styles from "./NewPost.module.css";
import { useState, useEffect } from "react";
import { useCookies } from "next-client-cookies";

function Post({ mutate }: { mutate: any }) {
	const cookies = useCookies();
	const username = cookies?.get("username")!;
	console.log(username);
	const[name,setName] = useState('');
	const[img, setImg] = useState('');
	const [text, setText] = useState("");


	const handleTextChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	}

	const handlePost = async () =>{
		try{

			const res_o = await fetch('http://localhost:3000/api/auth/user/adduser');
			const data = await res_o.json();
			console.log(data);
			setName(data.name);
			setImg(data.profilePic);

			if(name !== '' && img !== ''){
				console.log(name);
				console.log(img);

				const res = await fetch('http://localhost:3000/api/posts',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				
				body: JSON.stringify({
					text,
					user:name,
					githubName: username,
					profilePic: img
				})
			})

			const data = await res.json();
			console.log(data);
			setText('');
			}
		}
		catch(e){
			console.log(e);
		}
	};


	return (
		<div className={styles.main}>
			<div className={styles.msg}>
				<ProfilePic />
				<Textarea
					rows={2}
					variant="unstyled"
					placeholder="Create new post"
					onChange={(e) => handleTextChange(e)}
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
				<Button className={styles.postBtn} size="sm" onClick={handlePost}>
					Post
				</Button>
			</div>
		</div>
	);
}

export default Post;
