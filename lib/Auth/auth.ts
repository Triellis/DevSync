import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { getGihubBasicInfo } from "../function-server";

export const authConfig: NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		async signIn({ user }): Promise<string | boolean> {
			try {
				const rem = user?.image?.match(/\/u\/(\d+)/);

				const userId = rem ? rem[1] : "";

				const githubInfo = await getGihubBasicInfo(userId);

				if (githubInfo) {
					const res = await fetch(
						`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user/adduser`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								name: user?.name,
								email: user?.email,
								image: user?.image,
								githubName: githubInfo?.githubName,
								githubBio: githubInfo?.githubBio,
								githubBlog: githubInfo?.githubBlog,
							}),
						}
					);
					return true; // Return true to continue the sign-in process
				} else {
					return false; // Return false to stop the sign-in process
				}
			} catch (error) {
				console.error("Error adding user to DB:", error);
				return false; // Return false to stop the sign-in process
			}
		},
	},
};
