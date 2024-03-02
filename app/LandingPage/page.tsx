import { authConfig } from "@/lib/Auth/auth";
import Logo from "@/public/icons/Logo";
import { getServerSession } from "next-auth";
import LoginBtn from "../components/LoginBtn";
import SignoutBtn from "../components/Temp/SignoutBtn";
import styles from "./LandingPage.module.css";

export default async function Home() {
	const session = await getServerSession(authConfig);

	return (
		<div className={styles.main}>
			<Logo />

			<h1 className={styles.title}>Sync In. Stand Out.</h1>
			{!session ? (
				<LoginBtn />
			) : (
				<div>
					<p>You are signed in as {session.user?.email}</p>
					<SignoutBtn />
					<h2>Hello, {session.user?.name}</h2>
				</div>
			)}
		</div>
	);
}