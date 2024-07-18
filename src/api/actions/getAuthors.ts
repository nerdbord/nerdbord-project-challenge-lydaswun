"use server";

import { sanityFetch } from "@/lib/sanity.client";
import { type AuthorType } from "@/lib/sanity.types";

export const getAuthors = async () => {
	const query = '*[_type == "author"]{_id, name}';
	const authors = await sanityFetch<AuthorType[]>({ query });

	return authors;
};
