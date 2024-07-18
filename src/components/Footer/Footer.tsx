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
			<div className={styles.topbar}>
				<div className={styles.item}>
					<span className={styles.title}>Home</span>
					<ul>
						<li>Features</li>
						<li>Blogs</li>
						<li>
							Resources <span className={styles.newbadge}>New</span>
						</li>
						<li>Testimonials</li>
						<li>Contact Us</li>
						<li>Newsletter</li>
					</ul>
				</div>
				<div className={styles.item}>
					<span className={styles.title}> News</span>
					<ul>
						<li>Trending Stories</li>
						<li>Featured Videos</li>
						<li>Technology</li>
						<li>Health</li>
						<li>Politics</li>
						<li>Environment</li>
					</ul>
				</div>
				<div className={styles.item}>
					<span className={styles.title}>Blogs</span>
					<ul>
						<li>Quantum Computing</li>
						<li>AI Ethics</li>
						<li>Space Exploration</li>
						<li>
							Biotechnology <span className={styles.newbadge}>New</span>
						</li>
						<li>Renewable Energy</li>
						<li>Biohacking</li>
					</ul>
				</div>
				<div className={styles.item}>
					<span className={styles.title}>Podcasts</span>
					<ul>
						<li>AI Revolution</li>
						<li>
							AI Revolution <span className={styles.newbadge}>New</span>
						</li>
						<li>TechTalk AI</li>
						<li>AI Conversations</li>
					</ul>
				</div>
				<div className={styles.item}>
					<span className={styles.title}>Newsletter</span>
					<ul>
						<Button
							text="Subscribe"
							onClick={openModal}
							variant="primary"
							icon={Arrow}
							iconPosition="right"
						/>
					</ul>
				</div>
			</div>
			<div className={styles.bottombar}>
				<div className={styles.terms}>
					<p>Terms & Conditions </p> <p> Privacy Policy</p>
				</div>
				<div className={styles.social}>
					<FaTwitter />
					<FaLinkedin />
					<FaFacebook />
				</div>
				<div className={styles.copy}>
					<p>© {year} buty-z-kalkuty. All rights reserved.</p>
				</div>
			</div>
			<Modal isOpen={isModalOpen} onRequestClose={closeModal}>
				<Form />
			</Modal>
		</footer>
	);
};
