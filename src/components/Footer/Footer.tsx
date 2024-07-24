"use client";
import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Button } from "../Atoms/Button/Button";
import { Modal } from "../Atoms/Modal/Modal";
import { Form } from "../Form/Form";
import styles from "./Footer.module.css";
import Arrow from "@/assets/Arrow";

export const Footer = () => {
	const year = new Date().getFullYear();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<footer className={styles.footer}>
			<div className={styles.bottombar}>
				<div className={styles.copy}>
					<p>
						© {year} buty-z-kalkuty. <br /> All rights reserved.
					</p>
				</div>

				<div className={styles.social}>
					<FaTwitter />
					<FaLinkedin />
					<FaFacebook />
				</div>
				<Button
					text="Bądź na bieżąco z bajzlem"
					onClick={openModal}
					variant="primary"
					icon={Arrow}
					iconPosition="right"
				/>
			</div>
			<Modal isOpen={isModalOpen} onRequestClose={closeModal}>
				<Form />
			</Modal>
		</footer>
	);
};
