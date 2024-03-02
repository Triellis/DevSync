import { authConfig } from "@/lib/Auth/auth";
import { Avatar } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import React from "react";
import styles from "./ProfilePic.module.css";

async function ProfilePic({ sz }: { sz?: string }) {
	const session = await getServerSession(authConfig);

	return (
		<Avatar
			size={sz || "sm"}
			src={session?.user?.image || ""}
			className={styles.avatar}
		/>
	);
}

export default ProfilePic;
