import { Box } from "@chakra-ui/react";
import styles from "./Footer.module.css";

import MsgBox from "../MsgBox";
import { Suspense } from "react";
import SocialLinks from "../SocialLinks";

export default function Footer() {
	return (
		<div className={styles.footer} id="Contact">
			<Box className={styles.footerWrapper}>
				<Box className={styles.linkContentWrapper}>
					<SocialLinks />
					<MsgBox />
				</Box>
			</Box>
		</div>
	);
}
