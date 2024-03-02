import { cookies } from "next/headers";

export const getGihubBasicInfo = async (userId:string) => {
    try {
        const res = await fetch(`https://api.github.com/user/${userId}`);
        const data = await res.json();

        cookies().set('username', data.login);

        return {
            githubName: data.login,
            githubBio: data.bio,
            githubBlog: data.blog,
        };
    }
    catch(err) {
        console.log(err);
    }
}