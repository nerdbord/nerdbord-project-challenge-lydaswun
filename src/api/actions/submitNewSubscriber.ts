"use server";

import { addSubscriberToMailerLite } from "@/lib/mailerlite";

export const submitNewSubscriber = async ({
	name = "",
	email,
}: {
	name?: string;
	email: string;
}) => {
	try {
		const groupId = process.env.MAILERLITE_GROUP_ID;

		if (!groupId) {
			throw new Error("No MailerLite group ID found");
		}

		await addSubscriberToMailerLite(email, groupId, {
			name,
		});
	} catch (error) {
		console.error("Error adding subscriber to MailerLite");
	}
};
