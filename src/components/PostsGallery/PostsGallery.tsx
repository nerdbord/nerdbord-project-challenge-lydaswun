"use client";
import React, { useState } from "react";
import { type StaticImageData } from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Post } from "../Post/Post";
import styles from "./PostsGallery.module.css";

interface PostData {
	id: number;
	imageSrc: StaticImageData;
	imageAlt: string;
	title: string;
	category: string;
	likes: number;
	shares: number;
}

interface PostGalleryProps {
	posts: PostData[];
	postsPerPage?: number;
}

export const PostGallery: React.FC<PostGalleryProps> = ({ posts, postsPerPage = 12 }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(posts.length / postsPerPage);

	const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
	};

	return (
		<div id="allposts" className={styles.wrapper}>
			<div className={styles.gallery}>
				{currentPosts.map((post) => (
					<Post key={post.id} {...post} />
				))}
			</div>
			<div className={styles.pagination}>
				<button onClick={handlePreviousPage} disabled={currentPage === 1}>
					<RiArrowLeftSLine />
				</button>
				<span>
					{currentPage} / {totalPages}
				</span>
				<button onClick={handleNextPage} disabled={currentPage === totalPages}>
					<RiArrowRightSLine />
				</button>
			</div>
		</div>
	);
};
