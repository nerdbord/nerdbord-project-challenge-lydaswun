"use server";

import { increasePostLikes } from "@/api/services/social.service";

export const addLike = async (postId: string, qty: number) => {
	await increasePostLikes(postId, qty);

	// revalidateTag("like");
};
