"use client";

import Commits from "@/public/icons/Commits";
import Issue from "@/public/icons/Issue";
import PR from "@/public/icons/PR";
import Repo from "@/public/icons/Repo";
import Star from "@/public/icons/Star";
import { Avatar } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useCookies } from "next-client-cookies";
import React, { useEffect, useState } from "react";
import styles from "./ProfileCard.module.css";

function ProfileCard() {
	const session = useSession().data;
	const cookies = useCookies();
	const username = cookies?.get("username");

	const [stats, setStats] = useState({
		stars: 0,
		commits: 0,
		prs: 0,
		issues: 0,
		repos: 0,
	});

	const statistics = [
		{ icon: <Star />, title: "Total Stars", number: stats.stars },
		{ icon: <Commits />, title: "Total Commits", number: stats.commits },
		{ icon: <PR />, title: "Total PRs", number: stats.prs },
		{ icon: <Issue />, title: "Total Issues", number: stats.issues },
		{ icon: <Repo />, title: "Number of Repos", number: stats.repos },
	];

	return (
		<div className={styles.main}>
			<Avatar
				size={"2xl"}
				name="name"
				borderColor={"hsl(var(--primary))"}
				borderWidth={"2px"}
				src={session?.user?.image || ""}
			/>
			<div>
				<span className={styles.name}>{username} </span>
				<div className={styles.stats}>
					{statistics.map((stat, i) => (
						<div key={i} className={styles.stat}>
							<div>{stat.icon}</div>
							<span className={styles.title}>
								{stat.title} :{" "}
							</span>
							<span className={styles.number}>{stat.number}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
