import CommunityCard from "@/components/CommunityCard/CommunityCard";
import React from "react";
import styles from "./Communities.module.css";

function Communities() {
	return (
		<div className={styles.main}>
			<CommunityCard desc={"hihihhihi"} />
			<CommunityCard desc={"hihihhihi"} />
			<CommunityCard desc={"hihihhihi"} />
			<CommunityCard desc={"hihihhihi"} />
		</div>
	);
}

export default Communities;
