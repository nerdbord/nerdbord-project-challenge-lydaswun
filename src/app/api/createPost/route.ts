import { NextResponse } from "next/server";
import { createPost } from "@/api/services/createPost";

export async function POST() {
	try {
		const result = await createPost();

		return NextResponse.json(result);
	} catch (error) {
		console.error("Error creating post:", error);
		return NextResponse.json({ message: "Error creating post", error }, { status: 500 });
	}
}
