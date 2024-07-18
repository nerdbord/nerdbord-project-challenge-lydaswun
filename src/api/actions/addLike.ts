"use server";

import { revalidatePath } from "next/cache";
import { sanityClient } from "@/lib/sanity.client";

export const addLike = async (postId: string) => {
	await sanityClient.patch(postId).inc({ likes: 1 }).commit();

	revalidatePath("/", "layout");
};
