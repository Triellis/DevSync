import { Avatar } from "@chakra-ui/react";
import React from "react";
import styles from "./CommunityCard.module.css";

function CommunityCard({ desc, pic }: { desc: string; pic: string }) {
	return (
		<div className={styles.main}>
			<div className={styles.info}>
				<div>
					<Avatar size="md" name="Community Name" src={pic} />
				</div>
				<div className={styles.name}>Name</div>
			</div>
			<span className={styles.followers}>369 followers</span>

			{/* description */}
			<div className={styles.description}>{desc}</div>
		</div>
	);
}

export default CommunityCard;
