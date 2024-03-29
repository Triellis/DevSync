"use client";
import NewPost from "@/components/NewPost";
import Post from "@/components/Post/Post";

import { usePosts } from "@/lib/functions-clients";
import React from "react";
import styles from "./Dashboard.module.css";

function Page() {
	const { posts, isLoading, error, mutate } = usePosts();
	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	console.log(posts);

	return (
		<div className={styles.main}>
			<div className={styles.newPost}>
				<NewPost mutate={mutate} />
			</div>
			<div className={styles.post}>
			{Array.isArray(posts.allPosts) ? (
  posts.allPosts.map((post: any, i: any) => (
    <Post
      key={i}
      name={post.user}
      username={post.githubName}
      profilePicUrl={post.userImg}
      content={post.text}
      verified={true}
    />
  ))
) : (
  <div>No posts available.</div>
)}


				<Post
					name="Lee Robinson"
					username="leerob"
					profilePicUrl="https://avatars.githubusercontent.com/u/9113740?v=4"
					content="I am just excited!"
					verified={true}
				/>
				<Post
					name="Delba de Oliveira"
					username="delbaoliveira"
					profilePicUrl="https://avatars.githubusercontent.com/u/32464864?v=4"
					content="I am just excited!"
					verified={false}
				/>
				<Post
					name="Evan You"
					username="yyx990803"
					profilePicUrl="https://avatars.githubusercontent.com/u/499550?v=4"
					content="I am just excited!"
					verified={true}
				/>
				<Post
					name="Rich Harris"
					username="Rich-Harris"
					profilePicUrl="https://avatars.githubusercontent.com/u/1162160?v=4"
					content="I am just excited!"
					verified={true}
				/>
				<Post
					name="Linus Torvalds"
					username="torvalds"
					profilePicUrl="https://avatars.githubusercontent.com/u/1024025?v=4"
					content="I am just excited!"
					verified={false}
				/>
			</div>
		</div>
	);
}

export default Page;
