"use client";
import { useState } from "react";
import { Button } from "../Atoms/Button/Button";
import { Modal } from "../Atoms/Modal/Modal";
import { Form } from "../Form/Form";
import styles from "./Header.module.css";
import { Logo } from "@/assets/Logo";

export const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<header className={styles.header}>
			<div className={styles.logobox}>
				<Logo />
				BlogApp
			</div>
			<nav className={styles.nav}>
				{/*   <a href="">Home</a>
        <a href="">News</a>
        <a href="">Podcasts</a>
        <a href="">Resources</a> */}
			</nav>

			<Button text="Subscribe" onClick={openModal} variant="secondary" />
			<Modal isOpen={isModalOpen} onRequestClose={closeModal}>
				<Form />
			</Modal>
		</header>
	);
};
