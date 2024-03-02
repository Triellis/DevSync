import styles from "@/app/styles/page.module.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div className={styles.nav}>
				<Navbar />
			</div>
			<div>{children}</div>
		</div>
	);
}
