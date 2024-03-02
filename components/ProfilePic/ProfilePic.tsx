"use client";

import { Avatar } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import styles from "./ProfilePic.module.css";

function ProfilePic({ sz }: { sz?: string }) {
	const { data: session, status } = useSession();

	return (
		<Avatar
			size={sz || "sm"}
			src={session?.user?.image || ""}
			className={styles.avatar}
		/>
	);
}

export default ProfilePic;
