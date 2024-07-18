"use server";

import { sanityFetch } from "@/lib/sanity.client";
import { POPULAR_POST_QUERY } from "@/lib/sanity.queries";
import { type PopularPostType } from "@/lib/sanity.types";

export const getPopularPost = async () => {
	const popularPost = await sanityFetch<PopularPostType | null>({ query: POPULAR_POST_QUERY });

	return popularPost;
};
