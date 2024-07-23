import React from "react";
import Image from "next/image";
import { PortableText } from "next-sanity";
import styles from "./SinglePost.module.css";
import nopicture from "@/assets/nopicture.png";
import { type PostDetailedType } from "@/lib/sanity.types";
import { urlForImage } from "@/lib/sanity.image";
import { formatDate } from "@/utils/formatDate";
import { SocialStats } from "@/components/SocialStats/SocialStats";

type PostDetailProps = {
	post: PostDetailedType;
};

export const SinglePost: React.FC<PostDetailProps> = ({ post }) => {
	const { author, categories, content, mainImage, publishedAt, title, likes, _id, visitors } = post;

	const imgURL = urlForImage(mainImage.image).url();
	const postPublishedAt = formatDate(publishedAt);

	return (
		<>
			<div className={styles.header}>
				<div className={styles.imagebox}>
					<Image
						src={imgURL || nopicture}
						alt={mainImage.alt}
						width={500}
						height={500}
						className={styles.image}
					/>
				</div>
				<div className={styles.titlebox}>
					<h1 className={styles.title}>{title}</h1>
					<ul className={styles.postdata}>
						<li className={styles.item}>
							<p>Kategoria</p>
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
							<p>Data publikacji</p>
							<p className={styles.subtitle}>{postPublishedAt}</p>
						</li>
						<li className={styles.item}>
							<p>Autor</p>
							<p className={styles.subtitle}>{author.name}</p>
						</li>
					</ul>
					<div className={styles.buttonbox}>
						<SocialStats likes={likes} visitors={visitors} postId={_id} />
					</div>
				</div>
			</div>
			<div className={styles.postContent}>
				<PortableText value={content} />
			</div>
		</>
	);
};
