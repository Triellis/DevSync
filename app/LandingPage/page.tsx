import LoginBtn from "@/components/LoginBtn";
import Logo from "../../components/Logo";
import styles from "./LandingPage.module.css";
import {authConfig} from "@/lib/Auth/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
	const session = await getServerSession(authConfig);

	if (session) {
		redirect("/Dashboard");
	}

	return (
		<div className={styles.main}>
			<Logo fSize="84px" />

			<h1 className={styles.title}>Sync In. Stand Out.</h1>
			<LoginBtn />
		</div>
	);
}
