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
					<span>Learn, Connect, and Innovate</span>
					<h2>Be Part of the Future Tech Revolution</h2>
					<p>
						Immerse yourself in the world of future technology. Explore our comprehensive resources,
						connect with fellow tech enthusiasts, and drive innovation in the industry. Join a
						dynamic community of forward-thinkers.
					</p>
				</div>
			</div>
			<div className={styles.advantages}>
				<div className={styles.item}>
					<div className={styles.title}>
						<p>Resource Access</p>
						<BsArrowUpRightCircleFill />
					</div>
					<p className={styles.subtitle}>
						Visitors can access a wide range of resources, including ebooks, whitepapers, reports.
					</p>
				</div>
				<div className={styles.item}>
					<div className={styles.title}>
						<p>Resource Access</p>
						<BsArrowUpRightCircleFill />
					</div>
					<p className={styles.subtitle}>
						Visitors can access a wide range of resources, including ebooks, whitepapers, reports.
					</p>
				</div>
				<div className={styles.item}>
					<div className={styles.title}>
						<p>Resource Access</p>
						<BsArrowUpRightCircleFill />
					</div>
					<p className={styles.subtitle}>
						Visitors can access a wide range of resources, including ebooks, whitepapers, reports.
					</p>
				</div>
			</div>
		</div>
	);
};
