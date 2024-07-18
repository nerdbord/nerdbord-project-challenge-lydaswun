/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { v4 as uuid } from "uuid";
import { type SanityDocumentLike } from "sanity";
import { sanityClient } from "@/lib/sanity.client";
import { slugify } from "@/utils/slugify";
import { createBlockContent } from "@/utils/createBlockContent";
import { getAuthors, getCategories, uploadImage } from "@/api/actions";
import { generatePostContent } from "@/api/services/generatePostContent";

export async function createPost() {
	try {
		const [categories, authors] = await Promise.all([getCategories(), getAuthors()]);

		if (!categories.length || !authors.length) {
			throw new Error("No authors or categories found");
		}

		const { newPostTitle, newPostContent, newPostImageUrl } = await generatePostContent();
		const uniqueSlug = slugify(newPostTitle);
		console.log("Generated Slug:", uniqueSlug);

		const imageAsset = await uploadImage(newPostImageUrl);

		if (!imageAsset || !imageAsset.document) {
			throw new Error("Image upload failed");
		}

		console.log("Uploaded Image Asset:", imageAsset);

		const contentBlock = createBlockContent(`<html>${newPostContent}</html>`);

		const newPost: SanityDocumentLike = {
			_type: "post",
			_id: uuid(),
			title: newPostTitle,
			slug: {
				_type: "slug",
				current: uniqueSlug,
			},
			author: {
				_type: "reference",
				_ref: authors[Math.floor(Math.random() * authors.length)]._id,
			},
			mainImage: {
				_type: "image",
				asset: {
					_type: "reference",
					_ref: imageAsset.document._id,
				},
				alt: "Post Image",
			},
			categories: [
				{
					_type: "reference",
					_ref: categories[Math.floor(Math.random() * categories.length)]._id,
					_key: uuid(),
				},
			],
			publishedAt: new Date().toISOString(),
			popular: false,
			preview: "",
			content: contentBlock,
			likes: 0,
			visitors: 0,
		};

		console.log("Created Post:", JSON.stringify(newPost, null, 2));

		const result = await sanityClient.create(newPost);
		return result;
	} catch (error) {
		console.error("Error creating post:", error);
		throw error;
	}
}

void createPost();
