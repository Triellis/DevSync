import { Avatar } from "@chakra-ui/react";
import React from "react";
import styles from "./ProfilePic.module.css";

function ProfilePic() {
	return (
		<Avatar
			size="sm"
			src="public/icons/metaicon.png"
			className={styles.avatar}
		/>
	);
}

export default ProfilePic;
