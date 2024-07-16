import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./Post.module.css";
import { urlForImage } from "@/app/lib/sanity.image";
import { type PostCardType } from "@/app/lib/sanity.types";
import { SocialStats } from "@/components/SocialStats/SocialStats";

export const Post: React.FC<PostCardType> = ({
	mainImage,
	title,
	categories,
	slug,
	likes,
	_id,
}) => {
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
				<SocialStats likes={likes} postId={_id} />
			</div>
		</article>
	);
};
