"use client";
import React from "react";
import Image, { type StaticImageData } from "next/image";
import { IoIosHeartEmpty, IoMdPaperPlane } from "react-icons/io";
import { Button } from "../Atoms/Button/Button";
import { StatsDisplay } from "../Atoms/Stats/Stats";
import styles from "./Popular.module.css";
import Arrow from "@/assets/Arrow";

interface PopularProps {
	imageSrc: StaticImageData;
	imageAlt: string;
	title: string;
	description: string;
	category: string;
	publicationDate: string;
	author: string;
	likes: number;
	shares: number;
}

export const Popular: React.FC<PopularProps> = ({
	imageSrc,
	imageAlt,
	title,
	description,
	category,
	publicationDate,
	author,
	likes = 15,
	shares = 30,
}) => {
	return (
		<article className={styles.wrapper}>
			<Image src={imageSrc} width={400} height={427} alt={imageAlt} className={styles.image} />
			<div className={styles.desc}>
				<div className={styles.descbox}>
					<h6 className={styles.title}>{title}</h6>
					<p className={styles.subtitle}>{description}</p>
				</div>

				<ul className={styles.postdata}>
					<li className={styles.item}>
						<p>Category</p>
						<p className={styles.subtitle}>{category}</p>
					</li>
					<li className={styles.item}>
						<p>Publication Date</p>
						<p className={styles.subtitle}>{publicationDate}</p>
					</li>
					<li className={styles.item}>
						<p>Author</p>
						<p className={styles.subtitle}>{author}</p>
					</li>
				</ul>
				<div className={styles.buttonbox}>
					<div className={styles.social}>
						<StatsDisplay count={likes} icon={IoIosHeartEmpty} label={""} />
						<StatsDisplay count={shares} icon={IoMdPaperPlane} label={""} />
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
		</article>
	);
};
