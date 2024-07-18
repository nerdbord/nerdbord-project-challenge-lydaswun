﻿"use client";

import { useOptimistic, useTransition } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import styles from "./SocialStats.module.css";
import { addLike } from "@/api/actions";
import Arrow from "@/assets/Arrow";
import { Button } from "@/components/Atoms/Button/Button";
import { StatsDisplay } from "@/components/Atoms/Stats/Stats";

type SocialStatsProps = {
	likes: number;
	visitors: number;
	postId: string;
};

export const SocialStats = ({ likes, visitors, postId }: SocialStatsProps) => {
	const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes);
	const [_isPending, startTransition] = useTransition();

	const handleLike = async () => {
		startTransition(() => {
			setOptimisticLikes(optimisticLikes + 1);
		});
		await addLike(postId);
	};

	return (
		<>
			<div className={styles.social}>
				<StatsDisplay count={optimisticLikes} icon={IoIosHeartEmpty} label={""} />
				<StatsDisplay count={visitors} icon={IoEyeOutline} label={""} />
			</div>
			<Button
				text="Like"
				onClick={handleLike}
				variant="primary"
				icon={Arrow}
				iconPosition="right"
			/>
		</>
	);
};
