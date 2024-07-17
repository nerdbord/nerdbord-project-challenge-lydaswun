/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getAuthors } from "@/api/actions/getAuthors";
import { getCategories } from "@/api/actions/getCategories";
import { uploadImage } from "@/api/actions/uploadImage";
import { sanityClient } from "@/app/lib/sanity.client";
import { generatePostContent } from "@/api/actions/generatePostContent";
import { slugify } from "@/utils/slugify";

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

		const { title, content } = await generatePostContent();
		const uniqueSlug = slugify(title);
		console.log("Generated Slug:", uniqueSlug);

		const newPost = {
			_type: "post",
			title,
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
					_key: uniqueSlug,
					children: [
						{
							_type: "span",
							_key: `${uniqueSlug}-span`,
							text: content,
						},
					],
				},
			],
		};

		console.log("Created Post:", JSON.stringify(newPost, null, 2));

		const result = await sanityClient.create(newPost);
		return result;
	} catch (error) {
		console.error("Error creating post:", error);
		throw error;
	}
}
