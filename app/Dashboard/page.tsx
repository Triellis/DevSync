'use client';

import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import NewPost from "@/components/NewPost";
import Post from "@/components/Post/Post";


function page() {

	return (
		<div className={styles.main}>
			<div className={styles.newPost}>
				<NewPost />
			</div>

			<div className={styles.post}>
				<Post
					name="Lee Robinson"
					username="leerob"
					profilePicUrl="https://avatars.githubusercontent.com/u/9113740?v=4"
					content="I am just excited!"
				/>
				<Post
					name="Delba de Oliveira"
					username="delbaoliveira"
					profilePicUrl="https://avatars.githubusercontent.com/u/32464864?v=4"
					content="I am just excited!"
				/>
				<Post
					name="Evan You"
					username="yyx990803"
					profilePicUrl="https://avatars.githubusercontent.com/u/499550?v=4"
					content="I am just excited!"
				/>
				<Post
					name="Rich Harris"
					username="Rich-Harris"
					profilePicUrl="https://avatars.githubusercontent.com/u/1162160?v=4"
					content="I am just excited!"
				/>
				<Post
					name="Linus Torvalds"
					username="torvalds"
					profilePicUrl="https://avatars.githubusercontent.com/u/1024025?v=4"
					content="I am just excited!"
				/>
			</div>
		</div>
	);
}

export default page;
