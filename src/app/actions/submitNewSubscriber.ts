"use server";

import { addSubscriberToMailerLite } from "../lib/mailerlite";

export const submitNewSubscriber = async ({
	email,
	groupId,
}: {
	email: string;
	groupId: string;
}) => {
	try {
		await addSubscriberToMailerLite(email, groupId);
	} catch (error) {
		console.error("Error adding subscriber to MailerLite");
	}
};
