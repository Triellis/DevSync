'use client'

import { Avatar } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import styles from "./ProfilePic.module.css";

function ProfilePic() {
	const session = useSession().data;

	return (
		<Avatar
			size="sm"
			src={session?.user?.image || ""}
			className={styles.avatar}
			onClick={() => console.log("clicked")}
		/>
	);
}

export default ProfilePic;
