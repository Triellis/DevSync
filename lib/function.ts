export const getGihubBasicInfo = async (userId:string) => {
    try {
        console.log(userId);
        const res = await fetch(`https://api.github.com/user/${userId}`);
        const data = await res.json();

        console.log(data);
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