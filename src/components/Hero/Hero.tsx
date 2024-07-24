import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Dzisiaj na Blogu: Bądź na Bieżąco, Kur..!</h1>
			<p className={styles.subtitle}>
				Nie pierdolimy się w tańcu! Świeże newsy, najważniejsze wydarzenia i najnowsze trendy.
				Zobacz, jak radzić sobie w tym popierdolonym świecie. Przetrwanie to nasza specjalność!
			</p>
		</div>
	);
};
