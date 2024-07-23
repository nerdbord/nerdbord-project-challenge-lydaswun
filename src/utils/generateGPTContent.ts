import axios, { type AxiosResponse } from "axios";

type GPTResponse = {
	id: string;
	object: string;
	created: number;
	model: string;
	system_fingerprint: string;
	choices: {
		index: number;
		message: {
			role: string;
			content: string;
		};
		logprobs: null;
		finish_reason: string;
	}[];
	usage: {
		prompt_tokens: number;
		completion_tokens: number;
		total_tokens: number;
	};
};

const GPT_API_URL = "https://training.nerdbord.io/api/v1/openai/chat/completions";
const GPT_API_KEY = process.env.GPT_API_KEY;

export const generateGPTContent = async (prompt: string) => {
	const response: AxiosResponse<GPTResponse> = await axios.post(
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
					content: prompt,
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

	const { choices } = response.data;

	return choices[0]?.message?.content?.trim();
};
