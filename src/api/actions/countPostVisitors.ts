"use server";

import { revalidatePath } from "next/cache";
import { sanityClient } from "@/app/lib/sanity.client";

export const countPostVisitors = async (postId: string) => {
	await sanityClient.patch(postId).setIfMissing({ visitors: 0 }).inc({ visitors: 1 }).commit();

	revalidatePath("/", "layout");
};
