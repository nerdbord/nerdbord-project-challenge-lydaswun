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
	const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
		event.preventDefault();
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className={styles.header}>
			<div className={styles.logobox}>
				<Logo />
				TechBlog
			</div>
			<nav className={styles.nav}>
				<a href="#home" onClick={(event) => scrollToSection(event, "home")}>
					Home
				</a>
				<a href="#popular" onClick={(event) => scrollToSection(event, "popular")}>
					Popular
				</a>
				<a href="#allposts" onClick={(event) => scrollToSection(event, "allposts")}>
					All Posts
				</a>
			</nav>

			<Button text="Subscribe" onClick={openModal} variant="secondary" />
			<Modal isOpen={isModalOpen} onRequestClose={closeModal}>
				<Form />
			</Modal>
		</header>
	);
};
