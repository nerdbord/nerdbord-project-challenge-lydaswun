import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { Popular } from "@/components/Popular/Popular";
import { PostGallery } from "@/components/PostsGallery/PostsGallery";
import popularImage from "@/assets/popular.png";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { BackToTop } from "@/components/BackToTop/BackToTop";

const posts = [
	{
		id: 1,
		imageSrc: popularImage,
		imageAlt: "Image 1",
		title: "Lorem ipsum dolor sit!",
		category: "Category 1",
		likes: 10,
		shares: 5,
	},
	{
		id: 2,
		imageSrc: popularImage,
		imageAlt: "Image 2",
		title: "Post 2",
		category: "Category 2",
		likes: 15,
		shares: 8,
	},
	{
		id: 3,
		imageSrc: popularImage,
		imageAlt: "Image 3",
		title: "Post 3",
		category: "Category 3",
		likes: 20,
		shares: 10,
	},
	{
		id: 4,
		imageSrc: popularImage,
		imageAlt: "Image 4",
		title: "Post 4",
		category: "Category 4",
		likes: 25,
		shares: 12,
	},
	{
		id: 5,
		imageSrc: popularImage,
		imageAlt: "Image 5",
		title: "Post 5",
		category: "Category 5",
		likes: 30,
		shares: 15,
	},
	{
		id: 6,
		imageSrc: popularImage,
		imageAlt: "Image 6",
		title: "Post 6",
		category: "Category 6",
		likes: 35,
		shares: 18,
	},
	{
		id: 7,
		imageSrc: popularImage,
		imageAlt: "Image 7",
		title: "Post 7",
		category: "Category 7",
		likes: 40,
		shares: 20,
	},
	{
		id: 8,
		imageSrc: popularImage,
		imageAlt: "Image 8",
		title: "Post 8",
		category: "Category 8",
		likes: 45,
		shares: 22,
	},
	{
		id: 9,
		imageSrc: popularImage,
		imageAlt: "Image 9",
		title: "Post 9",
		category: "Category 9",
		likes: 50,
		shares: 25,
	},
	{
		id: 10,
		imageSrc: popularImage,
		imageAlt: "Image 7",
		title: "Post 7",
		category: "Category 7",
		likes: 40,
		shares: 20,
	},
	{
		id: 11,
		imageSrc: popularImage,
		imageAlt: "Image 8",
		title: "Post 8",
		category: "Category 8",
		likes: 45,
		shares: 22,
	},
	{
		id: 12,
		imageSrc: popularImage,
		imageAlt: "Image 9",
		title: "Post 9",
		category: "Category 9",
		likes: 50,
		shares: 25,
	},
];

export default function Home() {
	return (
		<main className={styles.container}>
			<Hero />
			<Popular
				imageSrc={popularImage}
				imageAlt="windmilles"
				title="Global Climate Summit Addresses Urgent Climate Action"
				description="World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets."
				category="Environment"
				publicationDate="October 10, 2023"
				author="Jane Smith"
				likes={1}
				shares={1}
			/>
			<PostGallery posts={posts} />
			<ContactUs />
			<BackToTop />
		</main>
	);
}
