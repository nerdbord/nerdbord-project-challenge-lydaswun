"use server";

import { addSubscriberToMailerLite } from "../lib/mailerlite";

export const submitNewSubscriber = async ({
	name,
	email,
	groupId,
}: {
	name: string;
	email: string;
	groupId: string;
}) => {
	try {
		await addSubscriberToMailerLite(email, groupId, {
			name,
		});
	} catch (error) {
		console.error("Error adding subscriber to MailerLite");
	}
};
