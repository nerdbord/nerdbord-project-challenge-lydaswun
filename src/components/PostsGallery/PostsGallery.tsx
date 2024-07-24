"use client";
import React, { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Post } from "../Post/Post";
import { SortPosts } from "../SortPosts/SortPosts";
import styles from "./PostsGallery.module.css";
import { type PostCardType } from "@/lib/sanity.types";

interface PostGalleryProps {
	posts: PostCardType[];
	postsPerPage?: number;
}

export const PostGallery: React.FC<PostGalleryProps> = ({ posts, postsPerPage = 12 }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [sortedPosts, setSortedPosts] = useState<PostCardType[]>(posts);
	const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

	useEffect(() => {
		setSortedPosts(posts);
	}, [posts]);

	const currentPosts = sortedPosts.slice(
		(currentPage - 1) * postsPerPage,
		currentPage * postsPerPage,
	);

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
	};

	return (
		<>
			{" "}
			<p className={styles.section}>Cały ten bajzel</p>
			{!sortedPosts.length ? (
				<h2 className={styles.empty}>Tu nawet wiatr nie wieje</h2>
			) : (
				<div id="allposts" className={styles.wrapper}>
					<SortPosts posts={posts} setSortedPosts={setSortedPosts} />
					<div className={styles.gallery}>
						{currentPosts.map((post) => (
							<Post key={post._id} {...post} />
						))}
					</div>
					{totalPages > 1 && (
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
					)}
				</div>
			)}
		</>
	);
};
