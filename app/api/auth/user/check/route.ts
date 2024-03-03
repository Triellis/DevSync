import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
	try {

		const res = await fetch(
			`https://api.github.com/users/JeelRajodiya/events`
		);

		const data = await res.json();

		const prs = data.filter((event: any) => {
			return event.type === "PullRequestEvent";
		}).map((event: any) => event.repo.name);

        console.log(prs);

        return NextResponse.json({ status: 200 });
	} catch (err) {
		console.log(err);
	}
}