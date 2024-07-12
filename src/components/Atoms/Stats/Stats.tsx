"use client";
import React from "react";
import { type IconType } from "react-icons";
import styles from "./Stats.module.css";

interface StatsDisplayProps {
	count: number;
	label: string;
	icon?: IconType;
}

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ count, label, icon: Icon }) => {
	return (
		<div className={styles.statsDisplay}>
			{Icon && <Icon className={styles.icon} />}
			<div className={styles.text}>
				<p className={styles.count}>{count}</p>
				<p className={styles.label}>{label}</p>
			</div>
		</div>
	);
};
