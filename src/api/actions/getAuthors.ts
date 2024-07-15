"use server";

import { sanityFetch } from "@/app/lib/sanity.client";

export const getAuthors = async () => {
	const query = '*[_type == "author"]{_id, name}';
	const authors = await sanityFetch<{ _id: string; name: string }[]>({ query });

	return authors;
};
