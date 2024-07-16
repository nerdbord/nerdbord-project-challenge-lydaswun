/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { getLatestPost } from "@/api/actions/getLatestPost";

const GPT_API_URL = "https://training.nerdbord.io/api/v1/openai/chat/completions";
const GPT_API_KEY = process.env.GPT_API_KEY;

const generateTitle = async (latestPostTitle: string) => {
	try {
		const response = await axios.post(
			GPT_API_URL,
			{
				model: "gpt-4o",
				messages: [
					{
						role: "system",
						content: "Jesteś pomocnym asystentem.",
					},
					{
						role: "user",
						content: `Oto tytuł ostatniego posta: "${latestPostTitle}". Wygeneruj nowy, humorystyczny tytuł postu na blogu w takim wulgarnym kurwa stylu o przetrwaniu w Polsce, ale jakiś inny temat. napisz czysty output`,
					},
				],
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${GPT_API_KEY}`,
				},
			},
		);

		console.log("GPT Title API response:", JSON.stringify(response.data, null, 2));

		const { choices } = response.data;
		const title = choices[0]?.message?.content?.trim();
		return title;
	} catch (error) {
		console.error("Error generating title:", error);
		throw error;
	}
};

const generateContent = async (title: string, latestPostContent: string) => {
	try {
		const response = await axios.post(
			GPT_API_URL,
			{
				model: "gpt-4o",
				messages: [
					{
						role: "system",
						content: "Jesteś pomocnym asystentem.",
					},
					{
						role: "user",
						content: `Oto treść ostatniego posta: "${latestPostContent}".

Wygeneruj nowy, humorystyczny post w takim wulgarnym jebanym stylu na blogu o przetrwaniu w Polsce na temat: "${title}".`,
					},
				],
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${GPT_API_KEY}`,
				},
			},
		);

		console.log("GPT Content API response:", JSON.stringify(response.data, null, 2));

		const { choices } = response.data;
		const content = choices[0]?.message?.content?.trim();
		return content;
	} catch (error) {
		console.error("Error generating content:", error);
		throw error;
	}
};

export const generatePostContent = async () => {
	try {
		const latestPost = await getLatestPost();
		console.log("Latest Post:", JSON.stringify(latestPost, null, 2));
		const title = await generateTitle(latestPost.title);
		const content = await generateContent(title, latestPost.content);
		return { title, content };
	} catch (error) {
		console.error("Error generating post content:", error);
		throw error;
	}
};
