import { sanityClient } from "@/lib/sanity.client";

export const increasePostLikes = async (postId: string, qty: number) => {
	return sanityClient
		.transaction()
		.patch(postId, { set: { likes: qty } })
		.commit({ tag: "like" });
};

export const decreasePostLikes = async (postId: string) => {
	return sanityClient
		.transaction()
		.patch(postId, { dec: { likes: 1 } })
		.commit({ tag: "like" });
};

export const increasePostVisitors = async (postId: string) => {
	return sanityClient
		.transaction()
		.patch(postId, { inc: { visitors: 1 } })
		.commit({ tag: "visitor" });
};
