"use client";

import Image from "next/image";
import { IoIosHeartEmpty, IoMdPaperPlane } from "react-icons/io";
import Link from "next/link";
import styles from "./Post.module.css";
import { urlForImage } from "@/app/lib/sanity.image";
import { type PostCardType } from "@/app/lib/sanity.types";
import Arrow from "@/assets/Arrow";
import { Button } from "@/components/Atoms/Button/Button";
import { StatsDisplay } from "@/components/Atoms/Stats/Stats";

export const Post: React.FC<PostCardType> = ({ mainImage, title, categories, slug }) => {
	const imageURL = urlForImage(mainImage.image).url();

	return (
		<article className={styles.wrapper}>
			<Link href={`/post/${slug}`} className={styles.postLink}>
				<Image
					src={imageURL}
					width={400}
					height={200}
					alt={mainImage.alt}
					className={styles.image}
				/>

				<p className={styles.title}>{title}</p>
				{categories?.length > 0 && (
					<div className={styles.categories}>
						{categories.map((category) => (
							<p key={category._id} className={styles.subtitle}>
								{category.name}
							</p>
						))}
					</div>
				)}
			</Link>
			<div className={styles.buttonbox}>
				<div className={styles.social}>
					<StatsDisplay count={50} icon={IoIosHeartEmpty} label={""} />
					<StatsDisplay count={120} icon={IoMdPaperPlane} label={""} />
				</div>
				<Button
					text="Like"
					onClick={() => alert("Liked!")}
					variant="primary"
					icon={Arrow}
					iconPosition="right"
					className={styles.button}
				/>
			</div>
		</article>
	);
};
