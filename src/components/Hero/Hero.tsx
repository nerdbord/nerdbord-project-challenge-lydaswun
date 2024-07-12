import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Today`s Headlines: Stay Informed</h1>
			<p className={styles.subtitle}>
				Explore the latest news from around the world. We bring you up-to-the-minute updates on the
				most significant events, trends, and stories. Discover the world through our news coverage.
			</p>
		</div>
	);
};
