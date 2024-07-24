"use server";

import { decreasePostLikes } from "@/api/services/social.service";

export const unLike = async (postId: string) => {
	return decreasePostLikes(postId);

	// revalidateTag("like");
};
