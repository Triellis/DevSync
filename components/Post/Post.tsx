import Bluetick from "@/public/icons/Bluetick";
import More from "@/public/icons/More";
import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import styles from "./Post.module.css";

function Post({ content }: { content: string }) {
	return (
		<div className={styles.main}>
			<div className={styles.me}>
				<div className={styles.head}>
					<ProfilePic sz="md" />
					<div className={styles.names}>
						<Flex
							direction={"row"}
							gap={"10px"}
							fontWeight={"bold"}
						>
							<span>Utsav Raithatha</span>
							<Bluetick />
						</Flex>

						<span
							style={{
								color: "#536471",
							}}
						>
							@ raithathautsav11
						</span>
					</div>
				</div>

				<div className={styles.more}>
					<IconButton
						aria-label="more"
						bg={"transparent"}
						_hover={{ bg: "transparent" }}
						icon={<More />}
					/>
				</div>
			</div>

			{/* content */}
			<div className={styles.content}>{content}</div>
		</div>
	);
}

export default Post;
