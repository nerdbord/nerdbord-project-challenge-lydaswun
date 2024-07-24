"use client";

import { useOptimistic, useState, useTransition } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import styles from "./SocialStats.module.css";
import { unLike } from "@/api/actions";
import { Button } from "@/components/Atoms/Button/Button";
import { StatsDisplay } from "@/components/Atoms/Stats/Stats";
import { Heart } from "@/assets/Heart";
import { addLike } from "@/app/actions/addLike";

type SocialStatsProps = {
	likes: number;
	visitors: number;
	postId: string;
};

export const SocialStats = ({ likes, visitors, postId }: SocialStatsProps) => {
	const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes);

	console.log("optimisticLikes", optimisticLikes);
	const [_isPending, startTransition] = useTransition();
	const [isLiked, setIsLiked] = useState(false);

	// const handleLike = async () => {
	// 	if (isLiked) {
	// 		setIsLiked(false);
	// 		startTransition(async () => {
	// 			setOptimisticLikes(optimisticLikes - 1);
	// 		});
	// 		await unLike(postId);
	// 	} else {
	// 		setIsLiked(true);
	// 		startTransition(async () => {
	// 			setOptimisticLikes(optimisticLikes + 1);
	// 		});
	// 		await addLike(postId);
	// 	}
	// };

	const handleLike = async () => {
		setIsLiked(true);
		startTransition(() => {
			setOptimisticLikes(optimisticLikes + 1);
		});
		await addLike(postId, optimisticLikes + 1);
	};

	const handleUnlike = async () => {
		setIsLiked(false);
		startTransition(() => {
			setOptimisticLikes(-1);
		});
		await unLike(postId);
	};

	return (
		<>
			<div className={styles.social}>
				<StatsDisplay count={optimisticLikes} icon={IoIosHeartEmpty} label={""} />
				<StatsDisplay count={visitors} icon={IoEyeOutline} label={""} />
			</div>
			<Button
				text={isLiked ? "Unlike" : "Like"}
				onClick={isLiked ? handleUnlike : handleLike}
				variant="primary"
				icon={Heart}
				iconPosition="right"
				className={styles.likeButton}
			/>
		</>
	);
};
