import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { getGihubBasicInfo } from "../function-server";
import connectToDB from "../DB";
import User from "../Schemas/User";

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
				const {
					name,
					email,
					image,
					githubName,
					githubBio,
					githubBlog,
				} = user as any;

				const rem = user?.image?.match(/\/u\/(\d+)/);

				const userId = rem ? rem[1] : "";

				const githubInfo = await getGihubBasicInfo(userId, user?.image || "");
				console.log(githubInfo?.githubBio || "No bio");

				if (githubInfo?.githubBio && githubInfo?.githubName && githubInfo?.githubBlog){
					await connectToDB();

					const userExists = await User.findOne({ email });

					if (userExists) {
						return true;
					}

					const user = new User({
						name,
						email,
						profilePic: image,
						githubName: githubInfo?.githubName,
						githubBio: githubInfo?.githubBio,
						githubBlog: githubInfo?.githubBlog,
					});

					await user.save();

					console.log(user);

					return true; // Return true to continue the sign-in process
				}
				else {
					console.error("Error getting user info from Github");
					return false; // Return false to stop the sign-in process
				}
			} catch (error) {
				console.error("Error adding user to DB:", error);
				return false; // Return false to stop the sign-in process
			}
		},
	},
};
