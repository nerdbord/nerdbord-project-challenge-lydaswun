import React, { useState } from "react";
import styles from "./SortPosts.module.css";
import { type PostCardType } from "@/lib/sanity.types";

interface SortPostsProps {
	posts: PostCardType[];
	setSortedPosts: (posts: PostCardType[]) => void;
}

export const SortPosts: React.FC<SortPostsProps> = ({ posts, setSortedPosts }) => {
	const [sortType, setSortType] = useState<string>("date");

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		setSortType(value);

		const sortedPosts = [...posts];
		if (value === "date") {
			sortedPosts.sort((a, b) => {
				const dateA = new Date(a.publishedAt as string);
				const dateB = new Date(b.publishedAt as string);
				if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
					return 0;
				}
				return dateB.getTime() - dateA.getTime();
			});
		} else if (value === "likes") {
			sortedPosts.sort((a, b) => {
				const likesA = typeof a.likes === "number" ? a.likes : 0;
				const likesB = typeof b.likes === "number" ? b.likes : 0;
				return likesB - likesA;
			});
		}

		setSortedPosts(sortedPosts);
	};

	return (
		<div className={styles.wrapper}>
			<label htmlFor="sort" className={styles.label}>
				Sort by:
			</label>
			<select id="sort" value={sortType} onChange={handleSortChange} className={styles.sort}>
				<option value="date">Publication Date</option>
				<option value="likes">Likes</option>
			</select>
		</div>
	);
};
