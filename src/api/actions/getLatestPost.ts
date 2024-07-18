"use server";

import { groq, type PortableTextBlock } from "next-sanity";
import { sanityFetch } from "@/lib/sanity.client";

const LATEST_POST_QUERY = groq`
  *[_type == "post"] | order(_createdAt desc)[0] {
    title,
    content
  }
`;

type LatestPost = {
	title: string;
	content: PortableTextBlock[];
};

export const getLatestPost = async () => {
	try {
		const latestPost = await sanityFetch<LatestPost | null>({ query: LATEST_POST_QUERY });

		if (!latestPost) {
			console.log("No latest post found");
			return null;
		}

		return latestPost;
	} catch (error) {
		console.error("Error fetching latest post:", error);
		throw error;
	}
};
