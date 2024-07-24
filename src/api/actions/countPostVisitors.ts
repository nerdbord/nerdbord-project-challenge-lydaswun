"use server";

import { revalidateTag } from "next/cache";
import { increasePostVisitors } from "@/api/services/social.service";

export const countPostVisitors = async (postId: string) => {
	return increasePostVisitors(postId);

	revalidateTag("visitor");
};
