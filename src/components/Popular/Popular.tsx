import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Popular.module.css";
import { type PopularPostType } from "@/app/lib/sanity.types";
import { urlForImage } from "@/app/lib/sanity.image";
import { formatDate } from "@/utils/formatDate";
import { SocialStats } from "@/components/SocialStats/SocialStats";

export const Popular: React.FC<PopularPostType> = ({
	_id,
	title,
	mainImage,
	categories,
	publishedAt,
	author,
	preview,
	slug,
	likes,
	visitors,
}) => {
	const popularImage = urlForImage(mainImage.image).url();
	const popularPostPublishedAt = formatDate(publishedAt);

	return (
		<div id="popular" className={styles.wrapper}>
			<Link href={`/post/${slug}`}>
				<Image
					src={popularImage}
					width={400}
					height={427}
					alt={mainImage.alt}
					className={styles.image}
				/>
			</Link>
			<div className={styles.desc}>
				<Link href={`/post/${slug}`} className={styles.postLink}>
					<div className={styles.descbox}>
						<h6 className={styles.title}>{title}</h6>
						<p className={styles.subtitle}>{preview}</p>
					</div>

					<ul className={styles.postdata}>
						<li className={styles.item}>
							<p>Category</p>
							{categories?.length > 0 && (
								<div className={styles.categories}>
									{categories.map((category) => (
										<p key={category._id} className={styles.subtitle}>
											{category.name}
										</p>
									))}
								</div>
							)}
						</li>
						<li className={styles.item}>
							<p>Publication Date</p>
							<p className={styles.subtitle}>{popularPostPublishedAt}</p>
						</li>
						<li className={styles.item}>
							<p>Author</p>
							<p className={styles.subtitle}>{author.name}</p>
						</li>
					</ul>
				</Link>
				<div className={styles.buttonbox}>
					<SocialStats likes={likes} visitors={visitors} postId={_id} />
				</div>
			</div>
		</div>
	);
};
