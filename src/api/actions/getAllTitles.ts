import { sanityFetch } from "@/lib/sanity.client";
import { ALL_TITLES_QUERY } from "@/lib/sanity.queries";

export const getAllTitles = async () => {
	const titles = await sanityFetch<{ title: string }[]>({ query: ALL_TITLES_QUERY });

	return titles;
};
