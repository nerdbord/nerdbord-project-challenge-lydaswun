/* eslint-disable @typescript-eslint/no-unsafe-call */
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { SinglePost } from "@/components/SinglePost/SinglePost";
import { countPostVisitors, getPostBySlug } from "@/api/actions";

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
