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
export function getRepos(username: string) {
	return fetcher(`/api/user/getRepos?username=${username}`);
}
