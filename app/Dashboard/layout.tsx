import styles from "@/app/styles/page.module.css";
import Navbar from "@/components/Navbar";
import { authConfig } from "@/lib/Auth/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getServerSession(authConfig);

	if (!session) {
		redirect("/LandingPage");
	}

	return (
		<>
			<div className={styles.nav}>
				<Navbar />
			</div>
			{children}
		</>
	);
}
