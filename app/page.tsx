import styles from "./styles/page.module.css";
import Contents from "./components/Temp/Contents";

export default async function Home() {

	return (
		<div className={styles.main}>
			<Contents />
		</div>
	);
}
