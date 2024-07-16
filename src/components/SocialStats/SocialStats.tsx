"use client";

import { useOptimistic, useTransition } from "react";
import { IoIosHeartEmpty, IoMdPaperPlane } from "react-icons/io";
import styles from "./SocialStats.module.css";
import { addLike } from "@/api/actions";
import Arrow from "@/assets/Arrow";
import { Button } from "@/components/Atoms/Button/Button";
import { StatsDisplay } from "@/components/Atoms/Stats/Stats";

type SocialStatsProps = {
	likes: number;
	postId: string;
};

export const SocialStats = ({ likes, postId }: SocialStatsProps) => {
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
				<StatsDisplay count={50} icon={IoMdPaperPlane} label={""} />
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
