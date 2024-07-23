import { notFound } from "next/navigation";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { SinglePost } from "@/components/SinglePost/SinglePost";
import { countPostVisitors, getPostBySlug } from "@/api/actions";

export const metadata: Metadata = {
	title: "Post Title",
	description: "Post Description",
};

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		return {
			title:
				"TechBlog - Your Gateway to Technology, AI, Business, Sport, Travel, Culture, and Innovation",
			description:
				"Dive into the world of technology, AI, business insights, sports updates, travel guides, cultural highlights, and groundbreaking innovations. Tech Explorer is your ultimate blog for staying updated with the latest trends and developments across these diverse fields, offering in-depth articles, expert opinions, and comprehensive guides to fuel your curiosity and knowledge.",
		};
	}

	return {
		title: post.title || "Post Title",
		//description: post.preview || "Post Description",
	};
}

export default async function PostPage({ params }: { params: { slug: string } }) {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		notFound();
	}

	await countPostVisitors(post._id);

	return (
		<div className={styles.container}>
			<SinglePost post={post} />
		</div>
	);
}
