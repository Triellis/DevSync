import { authConfig } from "@/lib/Auth/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
	const session = await getServerSession(authConfig);

	if (session) {
		redirect("/Dashboard");
	}
	redirect("/LandingPage");
}
