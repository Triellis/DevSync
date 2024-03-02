import React from "react";
import { authConfig } from "@/lib/Auth/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function page() {
	const session = await getServerSession(authConfig);

	if (!session) {
		redirect("/LandingPage");
	}


	return <div>page</div>;
}

export default page;
