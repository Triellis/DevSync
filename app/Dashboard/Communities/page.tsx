import CommunityCard from "@/components/CommunityCard/CommunityCard";
import React from "react";
import styles from "./Communities.module.css";

function Communities() {
	return (
		<div className={styles.main}>
			<div className={styles.wrap}>
				<CommunityCard
					name="Json Schema"
					followers={1264}
					pic={
						"https://avatars.githubusercontent.com/u/13019229?s=48&v=4"
					}
					desc={
						"The organisation responsible for the Json Schema specification"
					}
				/>
				<CommunityCard
					name="AsyncAPI Initiative"
					followers={785}
					pic={
						"https://avatars.githubusercontent.com/u/16401334?s=200&v=4"
					}
					desc={
						"AsyncAPI seeks to improve the current state of Event-Driven Architectures (EDAs) and the tooling system around them. "
					}
				/>
				<CommunityCard
					name="Json Schema"
					followers={1264}
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
