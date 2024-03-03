import { Button, Center, Divider } from "@chakra-ui/react";
import React from "react";
import styles from "./NoticePage.module.css";

function page() {
	const rules = [
		{
			srNumber: 1,
			rule: "No Hate Speech - Avoid offensive language, slurs, or discriminatory remarks. Create a welcoming and inclusive environment for everyone.",
		},
		{
			srNumber: 2,
			rule: "No Harassment - Refrain from bullying, threats, or any behavior intended to intimidate others. Prioritize respectful and inclusive communication.",
		},
		{
			srNumber: 3,
			rule: "No Spamming - Maintain meaningful discussions. Avoid excessive messages, repeated content, or unsolicited promotions.",
		},
		{
			srNumber: 4,
			rule: "No Explicit Content - Keep content family-friendly. Avoid explicit material, violence, or offensive/inappropriate content.",
		},
		{
			srNumber: 5,
			rule: "No Personal Attacks - Respect others. Avoid personal attacks, insults, or demeaning language. Discuss disagreements civilly and constructively.",
		},
	];

	return (
		<div className={styles.main}>
			<div className={styles.Header}>
				<span className={styles.topTxt}>Before you proceed...</span>
				<span className={styles.bold}>Notice</span>
			</div>
			<div className={styles.box}>
				{rules?.map((rule, index) => (
					<div className={styles.boxGrp} key={rule.srNumber}>
						<div className={styles.boxItem}>
							<div>{rule.srNumber}.</div>
							<div>{rule.rule}</div>
						</div>

						{index !== rules.length - 1 && <Divider />}
					</div>
				))}
			</div>

			<div className={styles.bottomTxt}>
				<span>
					By clicking &quot;I agree&quot;, you agree to follow the
					rules mentioned above.
				</span>
			</div>

			<Center>
				<Button colorScheme="blue" size="lg" className={styles.btn}>
					{" "}
					I agree{" "}
				</Button>
			</Center>
		</div>
	);
}

export default page;
