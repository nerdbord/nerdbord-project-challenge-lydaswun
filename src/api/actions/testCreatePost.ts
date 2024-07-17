/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { generatePostContent } from "./generatePostContent";
import { getAuthors } from "./getAuthors";
import { getCategories } from "./getCategories";
import { uploadImage } from "./uploadImage";
import { slugify } from "@/utils/slugify";
import { sanityClient } from "@/app/lib/sanity.client";

export async function createPost() {
	try {
		const [categories, authors] = await Promise.all([getCategories(), getAuthors()]);

		if (!categories.length || !authors.length) {
			throw new Error("No authors or categories found");
		}

		const { title, content, imageUrl } = await generatePostContent();
		const uniqueSlug = slugify(title);
		console.log("Generated Slug:", uniqueSlug);

		const imageAsset = await uploadImage(imageUrl);

		if (!imageAsset || !imageAsset.document) {
			throw new Error("Image upload failed");
		}

		console.log("Uploaded Image Asset:", imageAsset);

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
