import CommunityCard from "@/components/CommunityCard/CommunityCard";
import React from "react";
import styles from "./Communities.module.css";

function Communities() {
	return (
		<div className={styles.main}>
			<div className={styles.wrap}>
				<CommunityCard
					pic={
						"https://avatars.githubusercontent.com/u/13019229?s=48&v=4"
					}
					desc={
						"The organisation responsible for the Json Schema specification"
					}
				/>
				<CommunityCard
					pic={
						"https://avatars.githubusercontent.com/u/13019229?s=48&v=4"
					}
					desc={
						"The organisation responsible for the Json Schema specification"
					}
				/>
				<CommunityCard
					pic={
						"https://avatars.githubusercontent.com/u/13019229?s=48&v=4"
					}
					desc={
						"The organisation responsible for the Json Schema specification"
					}
				/>
				<CommunityCard
					pic={
						"https://avatars.githubusercontent.com/u/13019229?s=48&v=4"
					}
					desc={
						"The organisation responsible for the Json Schema specification"
					}
				/>
			</div>
		</div>
	);
}

export default Communities;
