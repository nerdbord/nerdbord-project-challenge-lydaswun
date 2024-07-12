import React from "react";
import { Button } from "../Atoms/Button/Button";
import styles from "./Form.module.css";

export const Form = () => {
	const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Subscribed!");
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Stay Updated !</div>
			<form className={styles.form} onSubmit={handleSubscribe}>
				<input type="email" id="email" name="email" placeholder="Email" />
				<Button variant="secondary" text="Subscribe" type="submit" />
			</form>
		</div>
	);
};
