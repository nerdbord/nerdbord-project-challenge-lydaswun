import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import styles from "./ContactUs.module.css";
import { Logo } from "@/assets/Logo";

export const ContactUs = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.background}></div>
			<div className={styles.infobox}>
				<Logo width={200} height={204} />
				<div className={styles.descbox}>
					<span>Przeżyj, Walcz, Zwyciężaj, Kurwa!</span>
					<h2>Bądź Częścią Rewolucji Przetrwania</h2>
					<p>
						Zanurz się w świecie przetrwania w Polsce, gdzie codzienność to walka o przetrwanie.
						Odkryj nasze pieprzone zasoby, połącz się z innymi twardzielami i dowiedz się, jak
						radzić sobie w tym zasranym świecie. Dołącz do społeczności gotowej na wszystko, kurwa!
					</p>
				</div>
			</div>
			<div className={styles.advantages}>
				<div className={styles.item}>
					<div className={styles.title}>
						<p>Zasoby Przetrwania</p>
						<BsArrowUpRightCircleFill />
					</div>
					<p className={styles.subtitle}>
						Otrzymuj dostęp do szerokiej gamy zajebistych zasobów, w tym poradników, przewodników i
						raportów o przetrwaniu.
					</p>
				</div>
				<div className={styles.item}>
					<div className={styles.title}>
						<p>Komunikacja i Wsparcie</p>
						<BsArrowUpRightCircleFill />
					</div>
					<p className={styles.subtitle}>
						Połącz się z innymi pieprzonymi preppersami, wymieniaj doświadczenia i wspierajcie się
						nawzajem w najgorszych chwilach.
					</p>
				</div>
				<div className={styles.item}>
					<div className={styles.title}>
						<p>Innowacyjne Techniki</p>
						<BsArrowUpRightCircleFill />
					</div>
					<p className={styles.subtitle}>
						Poznaj najnowsze, zajebiste techniki przetrwania i bądź na bieżąco z nowinkami, które
						pomogą Ci przetrwać w każdej zasranej sytuacji.
					</p>
				</div>
			</div>
		</div>
	);
};
