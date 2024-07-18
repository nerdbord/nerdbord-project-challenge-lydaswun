"use server";

import { sanityFetch } from "../../app/lib/sanity.client.js";

export const getCategories = async () => {
	const query = '*[_type == "category"]{_id, name}';
	const categories = await sanityFetch<{ _id: string; name: string }[]>({ query });

	return categories;
};
