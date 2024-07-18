"use server";

import { sanityFetch } from "@/lib/sanity.client";

export const getImages = async () => {
	const query = '*[_type == "imageAsset"]{_id, url}';
	const images = await sanityFetch<{ _id: string; url: string }[]>({ query });

	return images;
};
