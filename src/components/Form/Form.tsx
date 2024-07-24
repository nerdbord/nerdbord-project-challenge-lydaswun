import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../Atoms/Button/Button";
import styles from "./Form.module.css";
import { submitNewSubscriber } from "@/api/actions";

export const Form = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	useEffect(() => {
		const savedEmail = localStorage.getItem("email");
		if (savedEmail) {
			setEmail(savedEmail);
		}
	}, []);

	const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError("To nie wygląda jak email... Spróbuj jeszcze raz!");
			setTimeout(() => {
				setError("");
			}, 3000);
			return;
		}

		await submitNewSubscriber({
			email: email,
		});
		setSubscribed(true);
		setEmail("");
		localStorage.removeItem("email");
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		localStorage.setItem("email", e.target.value);
	};

	if (subscribed) {
		return (
			<div className={styles.wrapper}>
				<motion.div
					className={styles.thankYou}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h2>
						Gratulacje, właśnie dołączyłeś
						<br /> do naszej ekipy! 🥳 <br />
					</h2>
					<h1>💜 Dzięki! 💜</h1>
				</motion.div>
			</div>
		);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Nie przegap!</div>
			<form className={styles.form} onSubmit={handleSubscribe}>
				<input
					id="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={handleChange}
					className={error ? styles.inputError : ""}
					formNoValidate={true}
				/>
				<Button variant="secondary" text="Dołącz" type="submit" />
			</form>
			{error && <p className={styles.error}>{error}</p>}
			<p className={styles.info}>
				Obiecujemy zero spamu – tylko najlepsze treści,
				<br /> bo nikt nie lubi skrzynki pełnej śmieci!
				<br />
				<br />
				Psss! Co drugi dzień wjeżdża nowy post,
				<br /> bo ktoś musi Ci przypominać, jak przetrwać w tym cyrku.
			</p>
		</div>
	);
};
