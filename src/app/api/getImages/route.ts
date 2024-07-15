import { NextResponse } from "next/server";
import { getImages } from "@/api/actions/getImages";

export async function GET() {
	try {
		const images = await getImages();
		return NextResponse.json({ images });
	} catch (error) {
		console.error("Error fetching images:", error);
		return NextResponse.json({ message: "Error fetching images", error }, { status: 500 });
	}
}
