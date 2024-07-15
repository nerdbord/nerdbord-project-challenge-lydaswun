/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { v4 as uuidv4 } from "uuid";
import { getAuthors } from "@/api/actions/getAuthors";
import { getCategories } from "@/api/actions/getCategories";
import { uploadImage } from "@/api/actions/uploadImage";
import { sanityClient } from "@/app/lib/sanity.client";

export async function createPost() {
	try {
		const [categories, authors] = await Promise.all([getCategories(), getAuthors()]);

		if (!categories.length || !authors.length) {
			throw new Error("No authors or categories found");
		}

		const imageAsset = await uploadImage(
			"https://www.murrano.pl/145196-large_default/nosidlo-drewniane-na-piwo-z-otwieraczem-i-grawerem-dla-przyjaciela-na-18-urodziny.jpg",
		);

		if (!imageAsset || !imageAsset.document) {
			throw new Error("Image upload failed");
		}

		console.log("Uploaded Image Asset:", imageAsset);

		const uniqueSlug = `generated-post-${uuidv4()}`; // to jest tak na odpierdol zrobione, bo potrzebowałęm żeby coś inikalnego było do testów, otem mozna tu zrobić cokolwiek innego co gpt będzie wymyślał i jakimś regexerm oddzielał słowa "-". a nawet nie regexem przecież tylko joinem

		const newPost = {
			_type: "post",
			title: "Ania piwerko",
			slug: {
				_type: "slug",
				current: uniqueSlug,
			},
			author: {
				_type: "reference",
				_ref: authors[0]._id,
			},
			mainImage: {
				_type: "image",
				asset: {
					_type: "reference",
					_ref: imageAsset.document._id,
				},
			},
			categories: [
				{
					_type: "reference",
					_ref: categories[0]._id,
				},
			],
			publishedAt: new Date().toISOString(),
			content: [
				{
					_type: "block",
					children: [
						{
							_type: "span",
							text: "yoooooooooooo",
						},
					],
				},
			],
		};

		const result = await sanityClient.create(newPost);
		return result;
	} catch (error) {
		console.error("Error creating post:", error);
		throw error;
	}
}
