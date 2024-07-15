/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";
import { uploadImage } from "@/api/actions/uploadImage";

export async function POST() {
	try {
		const imageUrl = "https://via.placeholder.com/150";
		const asset = await uploadImage(imageUrl);
		return NextResponse.json({ asset });
	} catch (error) {
		console.error("Error uploading image:", error);
		return NextResponse.json({ message: "Error uploading image", error }, { status: 500 });
	}
}
