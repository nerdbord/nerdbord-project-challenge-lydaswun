"use server";

import { sanityFetch } from "@/lib/sanity.client";
import { POST_BY_SLUG_QUERY } from "@/lib/sanity.queries";
import { type PostDetailedType } from "@/lib/sanity.types";

export const getPostBySlug = async (slug: string): Promise<PostDetailedType | null> => {
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
