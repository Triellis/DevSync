import { authConfig } from "@/lib/Auth/auth";
import { Avatar } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import React from "react";
import styles from "./ProfileCard.module.css";
import { cookies } from "next/headers";

async function ProfileCard() {
	const session = await getServerSession(authConfig);
	const usename = cookies().get("username");
	return (
		<div className={styles.main}>
			<Avatar size="2xl" name="name" src={session?.user?.image || ""} />
			<div>
				<span className={styles.name}>username</span>
				<div className={styles.stats}></div>
			</div>
		</div>
	);
}

export default ProfileCard;
