"use client";
import useSWR from "swr";

import { RepositoryStats } from "./types";

// @ts-ignore
export const fetcher = (...args) =>
	// @ts-ignore

	fetch(...args)
		.then((res) => res.json())
		.catch((err) => console.error(err));

export function useGHStats(username: string) {
	const { data, error, isLoading, mutate } = useSWR(
		`/api/user/getStats?username=${username}`,
		fetcher
	);

	return {
		stats: data as RepositoryStats,
		isLoading,
		error: error,
		mutate,
	};
}

export function usePosts() {
	const { data, error, isLoading, mutate } = useSWR(`/api/Allposts`, fetcher);

	return {
		posts: data,
		isLoading,
		error: error,
		mutate,
	};
}

export function getRepos(username: string) {
	return fetcher(`/api/user/getRepos?username=${username}`);
}

export const getGithubOrganizations = async (username: string) => {
	try {
		const res = await fetch(
			`https://api.github.com/users/${username}/events`
		);

		const data = await res.json();

		const prs = data
			.filter((event: any) => {
				return event.type === "PullRequestEvent";
			})
			.map((event: any) => event.repo.id);

		console.log(prs);
	} catch (err) {
		console.log(err);
	}
};

function formatNumber(number: number) {
	if (number >= 1e6) {
		return (number / 1e6).toFixed(1) + "M";
	} else if (number >= 1e3) {
		return (number / 1e3).toFixed(1) + "k";
	} else {
		return number.toString();
	}
}

function getRandomNumber(max: number) {
	const randomDecimal = Math.random();
	const randomNumber = Math.floor(randomDecimal * (max + 1));
	return formatNumber(randomNumber);
}
