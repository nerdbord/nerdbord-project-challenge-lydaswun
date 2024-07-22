/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { v4 as uuid } from "uuid";
import { type SanityDocumentLike } from "sanity";
import { sanityClient } from "@/lib/sanity.client";
import { slugify } from "@/utils/slugify";
import { createBlockContent } from "@/utils/createBlockContent";
import { getAuthors, uploadImage } from "@/api/actions";
import { generatePostContent } from "@/api/services/generatePostContent";

export async function createPost() {
	try {
		const authors = await getAuthors();

		if (!authors.length) {
			throw new Error("No authors found");
		}

		const {
			newPostTitle,
			newPostContent,
			newPostImageUrl,
			newPostCategoriesWithRef,
			newPostPreview,
		} = await generatePostContent();

		const uniqueSlug = slugify(newPostTitle);

		const imageAsset = await uploadImage(newPostImageUrl);

		if (!imageAsset || !imageAsset.document) {
			throw new Error("Image upload failed");
		}

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
			categories: newPostCategoriesWithRef,
			publishedAt: new Date().toISOString(),
			popular: false,
			preview: newPostPreview,
			content: contentBlock,
			likes: 0,
			visitors: 0,
		};

		const result = await sanityClient.create(newPost);
		return result;
	} catch (error) {
		console.error("Error creating post:", error);
		throw error;
	}
}
