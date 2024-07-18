/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";
import { getAuthors } from "@/api/actions/getAuthors.js";

export async function GET() {
	try {
		const authors = await getAuthors();
		return NextResponse.json({ authors });
	} catch (error) {
		console.error("Error fetching authors:", error);
		return NextResponse.json({ message: "Error fetching authors", error }, { status: 500 });
	}
}
