import useSWR from "swr";

// @ts-ignore
export const fetcher = (...args) =>
	// @ts-ignore

	fetch(...args)
		.then((res) => res.json())
		.catch((err) => console.error(err));

export function useUserSearch(username: string) {
	const { data, error, isLoading, mutate } = useSWR(
		`/api/user/getStats?username=${username}`,
		fetcher
	);
	return {
		users: data as ReceivedUserDataOnClient[],
		isLoading,
		error: error,
		mutate,
	};
}
