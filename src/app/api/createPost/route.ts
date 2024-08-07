import { NextResponse } from "next/server";
import { createPost } from "@/api/services/createPost";

export const maxDuration = 300;

export async function GET() {
	try {
		const result = await createPost();

		return NextResponse.json(result);
	} catch (error) {
		console.error("Error creating post:", error);
		return NextResponse.json({ message: "Error creating post", error }, { status: 500 });
	}
}
