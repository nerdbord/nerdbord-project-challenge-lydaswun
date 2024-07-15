import styles from "./page.module.css";
import { SinglePost } from "@/components/SinglePost/SinglePost";
import { getPostBySlug } from "@/api/actions";

export default async function PostPage({ params }: { params: { slug: string } }) {
	const post = await getPostBySlug(params.slug);

	return <div className={styles.container}>{post && <SinglePost post={post} />}</div>;
}
