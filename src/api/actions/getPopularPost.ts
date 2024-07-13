"use server";

import { sanityFetch } from "@/app/lib/sanity.client";
import { POPULAR_POST_QUERY } from "@/app/lib/sanity.queries";
import { type PopularPostType } from "@/app/lib/sanity.types";

export const getPopularPost = async () => {
	const popularPost = await sanityFetch<PopularPostType | null>({ query: POPULAR_POST_QUERY });

	return popularPost;
};
