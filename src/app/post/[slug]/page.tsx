import { notFound } from "next/navigation";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { SinglePost } from "@/components/SinglePost/SinglePost";
import { countPostVisitors, getPostBySlug } from "@/api/actions";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const post = await getPostBySlug(params.slug);

	return {
		title: post?.title || "Post Title",
		description: post?.preview || "Post Description",
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
