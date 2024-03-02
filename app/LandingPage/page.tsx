import LoginBtn from "@/components/LoginBtn";
import Logo from "../../components/Logo";
import styles from "./LandingPage.module.css";

export default async function Home() {
	return (
		<div className={styles.main}>
			<Logo fSize="84px" />

			<h1 className={styles.title}>Sync In. Stand Out.</h1>
			<LoginBtn />
		</div>
	);
}
