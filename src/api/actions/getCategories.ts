"use server";

import { sanityFetch } from "../../lib/sanity.client";
import { type CategoryType } from "@/lib/sanity.types";

export const getCategories = async () => {
	const query = '*[_type == "category"]{_id, name,}';
	const categories = await sanityFetch<CategoryType[]>({ query });

	return categories;
};
