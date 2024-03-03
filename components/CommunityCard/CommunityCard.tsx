import { Avatar } from "@chakra-ui/react";
import React from "react";
import styles from "./CommunityCard.module.css";

function CommunityCard({
	name,
	desc,
	pic,
	followers,
}: {
	name: string;
	desc: string;
	pic: string;
	followers: number;
}) {
	return (
		<div className={styles.main}>
			<div className={styles.info}>
				<div>
					<Avatar size="md" name="Community Name" src={pic} />
				</div>
				<div className={styles.name}>{name}</div>
			</div>
			<span className={styles.followers}>{followers} followers</span>

			{/* description */}
			<div className={styles.description}>{desc}</div>
		</div>
	);
}

export default CommunityCard;
