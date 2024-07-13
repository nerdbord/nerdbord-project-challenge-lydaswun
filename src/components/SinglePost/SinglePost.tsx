"use client";
import React from "react";
import Image from "next/image";
import { IoIosHeartEmpty, IoMdPaperPlane } from "react-icons/io";
import { Button } from "../Atoms/Button/Button";
import { StatsDisplay } from "../Atoms/Stats/Stats";
import styles from "./SinglePost.module.css";
import Arrow from "@/assets/Arrow";
import nopicture from "@/assets/nopicture.png";

type Author = {
	name: string;
	image: string;
};

type Post = {
	id: number;
	imageSrc?: string;
	imageAlt: string;
	category: string;
	publicationDate: string;
	likes?: number;
	shares?: number;
	title: string;
	content: string;
	imgURL?: string;
	author: Author;
};

type PostDetailProps = {
	post: Post;
};

export const SinglePost: React.FC<PostDetailProps> = ({ post }) => {
	const { likes = 20, shares = 40 } = post;

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.imagebox}>
					<Image src={post.imgURL || nopicture} alt={post.imageAlt} width={500} height={300} />
				</div>
				<div className={styles.titlebox}>
					<h1 className={styles.title}>{post.title}</h1>
					<ul className={styles.postdata}>
						<li className={styles.item}>
							<p>Category</p>
							<p className={styles.subtitle}>{post.category}</p>
						</li>
						<li className={styles.item}>
							<p>Publication Date</p>
							<p className={styles.subtitle}>{post.publicationDate}</p>
						</li>
						<li className={styles.item}>
							<p>Author</p>
							<p className={styles.subtitle}>{post.author.name}</p>
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
							className={styles.button}
						/>
					</div>
				</div>
			</div>
			<p className={styles.content}>{post.content}</p>
		</div>
	);
};
