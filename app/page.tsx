import { authConfig } from "@/lib/Auth/auth";
import { getServerSession } from "next-auth";
import LoginBtn from "./components/LoginBtn/LoginBtn";
import Auth from "./components/Temp/Auth/Auth";
import SignoutBtn from "./components/Temp/SignoutBtn";
import styles from "./styles/page.module.css";

export default async function Home() {
	const session = await getServerSession(authConfig);

	return (
		<div className={styles.main}>
			<h1 className={styles.title}>Hello There!</h1>
			{!session ? (
				// <Auth />
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
