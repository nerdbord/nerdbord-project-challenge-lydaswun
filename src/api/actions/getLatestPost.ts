/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { groq } from "next-sanity";
import { sanityClient } from "@/app/lib/sanity.client";

const LATEST_POST_QUERY = groq`
  *[_type == "post"] | order(_createdAt desc)[0] {
    title,
    content
  }
`;

export const getLatestPost = async () => {
	try {
		const latestPost = await sanityClient.fetch(LATEST_POST_QUERY);
		return latestPost;
	} catch (error) {
		console.error("Error fetching latest post:", error);
		throw error;
	}
};
