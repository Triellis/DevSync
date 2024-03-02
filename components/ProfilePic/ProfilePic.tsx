import { authConfig } from "@/lib/Auth/auth";
import { Avatar } from "@chakra-ui/react";

import React from "react";
import styles from "./ProfilePic.module.css";
import { useSession } from "next-auth/react";

function ProfilePic() {
	const session = useSession().data;

	return (
		<Avatar
			size="sm"
			src={session?.user?.image || ""}
			className={styles.avatar}
		/>
	);
}

export default ProfilePic;
