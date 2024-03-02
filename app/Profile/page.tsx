import ProfileCard from "@/components/ProfileCard/ProfileCard";
import React from "react";
import styles from "./Profile.module.css";

function Profile() {
	return (
		<div className={styles.main}>
			<ProfileCard />
		</div>
	);
}

export default Profile;
