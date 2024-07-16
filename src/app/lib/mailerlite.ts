import MailerLite from "@mailerlite/mailerlite-nodejs";

export const mailerLiteClient = new MailerLite({
	api_key: process.env.MAILERLITE_API_KEY || "",
});

export async function addSubscriberToMailerLite(
	email: string,
	groupId: string,
	fields?: Record<string, string>,
) {
	if (!process.env.MAILERLITE_GROUP_ID) {
		console.error("MAILERLITE_GROUP_ID is not set");
		return;
	}

	try {
		await mailerLiteClient.subscribers.createOrUpdate({
			email,
			groups: [groupId || process.env.MAILERLITE_GROUP_ID],
			fields,
		});
	} catch (error) {
		console.error("Error adding subscriber to MailerLite:", error);
	}
}
