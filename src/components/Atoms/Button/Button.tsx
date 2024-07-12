"use client";
import React from "react";
import { type IconType } from "react-icons";
import styles from "./Button.module.css";

interface ButtonProps {
	text: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	className?: string;
	variant?: "primary" | "secondary" | "danger";
	icon?: IconType;
	iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
	text,
	onClick = () => {},
	type = "button",
	disabled = false,
	className = "",
	variant = "primary",
	icon: Icon,
	iconPosition = "right",
}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className={`${styles.button} ${styles[variant]} ${className}`}
		>
			{Icon && iconPosition === "left" && <Icon className={styles.icon} />}
			{text}
			{Icon && iconPosition === "right" && <Icon className={styles.icon} />}
		</button>
	);
};
