import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { Popular } from "@/components/Popular/Popular";
import { PostGallery } from "@/components/PostsGallery/PostsGallery";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { BackToTop } from "@/components/BackToTop/BackToTop";
import { getAllPosts, getPopularPost } from "@/api/actions";

export default async function Home() {
	const posts = await getAllPosts();
	const popularPost = await getPopularPost();

	return (
		<main className={styles.container}>
			<Hero />
			{popularPost && <Popular {...popularPost} />}
			<PostGallery posts={posts} />
			<ContactUs />
			<BackToTop />
		</main>
	);
}
