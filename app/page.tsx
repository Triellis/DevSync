import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
	const session = useSession().data;

	if (session) {
		redirect("/Dashboard");
	}
	redirect("/LandingPage");
}
