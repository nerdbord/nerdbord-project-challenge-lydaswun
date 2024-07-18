"use server";

import { sanityFetch } from "@/app/lib/sanity.client";
import { ALL_POSTS_QUERY } from "@/app/lib/sanity.queries";
import { type PostCardType } from "@/app/lib/sanity.types";

export const getAllPosts = async () => {
	const posts = await sanityFetch<PostCardType[]>({ query: ALL_POSTS_QUERY });
	console.log("Fetched Posts: ", posts);
	return posts;
};
