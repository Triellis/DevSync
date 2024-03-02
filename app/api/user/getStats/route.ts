import { NextRequest, NextResponse } from "next/server";
import jsdom from "jsdom";
import { RepositoryStats } from "@/lib/types";
function parseText(text: string) {
	const dom = new jsdom.JSDOM(text);
	const { document } = dom.window;

	const issues = document.querySelector('[data-testid="issues"]')!.innerHTML;
	const prs = document.querySelector('[data-testid="prs"]')!.innerHTML;
	const stars = document.querySelector('[data-testid="stars"]')!.innerHTML;
	const commits = document.querySelector(
		'[data-testid="commits"]'
	)!.innerHTML;
	const contribs = document.querySelector(
		'[data-testid="contribs"]'
	)!.innerHTML;

	console.log(issues, prs, stars, commits, contribs);
	return {
		issues,
		prs,
		stars,
		commits,
		contribs,
	} as RepositoryStats;
}

export const GET = async (req: NextRequest, res: NextResponse) => {
	const username = req.cookies.get("username")?.value;

	const stats = await fetch(
		`https://github-readme-stats.vercel.app/api?username=${username}`
	);

	const htmlData = await stats.text();

	const data = parseText(htmlData);
	return NextResponse.json(data, { status: 200 });
};
