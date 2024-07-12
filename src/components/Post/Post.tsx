"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { IoIosHeartEmpty, IoMdPaperPlane } from "react-icons/io";
import { Button } from "../Atoms/Button/Button";
import { StatsDisplay } from "../Atoms/Stats/Stats";
import styles from "./Post.module.css";
import Arrow from "@/assets/Arrow";

interface PostProps {
	imageSrc: StaticImageData;
	imageAlt: string;
	title: string;
	category: string;
	likes: number;
	shares: number;
}

export const Post: React.FC<PostProps> = ({
	imageSrc,
	imageAlt,
	title,
	category,
	likes = 104,
	shares = 155,
}) => {
	return (
		<article className={styles.wrapper}>
			<Image src={imageSrc} width={400} height={200} alt={imageAlt} className={styles.image} />
			<p className={styles.title}>{title}</p>
			<p className={styles.subtitle}>{category}</p>
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
					className={styles.button}
				/>
			</div>
		</article>
	);
};
