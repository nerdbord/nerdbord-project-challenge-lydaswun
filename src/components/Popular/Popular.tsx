"use client";
import React from "react";
import Image from "next/image";
import { IoIosHeartEmpty, IoMdPaperPlane } from "react-icons/io";
import Link from "next/link";
import { Button } from "../Atoms/Button/Button";
import { StatsDisplay } from "../Atoms/Stats/Stats";
import styles from "./Popular.module.css";
import Arrow from "@/assets/Arrow";
import { type PopularPostType } from "@/app/lib/sanity.types";
import { urlForImage } from "@/app/lib/sanity.image";
import { formatDate } from "@/utils/formatDate";

export const Popular: React.FC<PopularPostType> = ({
	title,
	mainImage,
	categories,
	publishedAt,
	author,
	preview,
	slug,
}) => {
	const popularImage = urlForImage(mainImage.image).url();
	const popularPostPublishedAt = formatDate(publishedAt);

	return (
		<div id="popular" className={styles.wrapper}>
			<Image
				src={popularImage}
				width={400}
				height={427}
				alt={mainImage.alt}
				className={styles.image}
			/>
			<div className={styles.desc}>
				<Link href={`/post/${slug}`} className={styles.postLink}>
					<div className={styles.descbox}>
						<h6 className={styles.title}>{title}</h6>
						<p className={styles.subtitle}>{preview}</p>
					</div>

					<ul className={styles.postdata}>
						<li className={styles.item}>
							<p>Category</p>
							{categories.length > 0 && (
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
					<div className={styles.social}>
						<StatsDisplay count={1} icon={IoIosHeartEmpty} label={""} />
						<StatsDisplay count={1} icon={IoMdPaperPlane} label={""} />
					</div>
					<Button
						text="Like"
						onClick={() => alert("Liked!")}
						variant="primary"
						icon={Arrow}
						iconPosition="right"
						className="my-custom-button"
					/>
				</div>
			</div>
		</div>
	);
};
