import React from "react";
import styles from "./Loader.module.css";
import { Logo } from "@/assets/Logo";

export const Loader = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.loader}>
				<Logo />
			</div>
		</div>
	);
};
