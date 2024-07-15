"use server";

import { sanityFetch } from "@/app/lib/sanity.client";
import { POST_BY_SLUG_QUERY } from "@/app/lib/sanity.queries";
import { type PostDetailedType } from "@/app/lib/sanity.types";

export const getPostBySlug = async (slug: string) => {
	try {
		const post = await sanityFetch<PostDetailedType>({
			query: POST_BY_SLUG_QUERY,
			params: { slug },
		});

		return post;
	} catch (error) {
		console.error(error);
		return null;
	}
};
