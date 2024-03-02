"use client";

import Commits from "@/public/icons/Commits";
import Issue from "@/public/icons/Issue";
import PR from "@/public/icons/PR";
import Repo from "@/public/icons/Repo";
import Star from "@/public/icons/Star";
import { Avatar } from "@chakra-ui/react";
import React from "react";
import styles from "./ProfileCard.module.css";
import { useSession } from "next-auth/react";

function ProfileCard() {
	const { data: session, status } = useSession();

	const statistics = [
		{ icon: <Star />, title: "Total Stars", number: 10 },
		{ icon: <Commits />, title: "Total Commits", number: 20 },
		{ icon: <PR />, title: "Total PRs", number: 5 },
		{ icon: <Issue />, title: "Total Issues", number: 3 },
		{ icon: <Repo />, title: "Number of Repos", number: 7 },
	];

	return (
		<div className={styles.main}>
			<Avatar size="2xl" name="name" src={session?.user?.image || ""} />
			<div>
				<span className={styles.name}>Username</span>
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
