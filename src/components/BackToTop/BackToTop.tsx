"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTop.module.css";

export const BackToTop: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className={`${styles.backToTop} ${isVisible ? styles.visible : ""}`}>
			<button onClick={scrollToTop} className={styles.button}>
				<FaArrowUp />
			</button>
		</div>
	);
};
