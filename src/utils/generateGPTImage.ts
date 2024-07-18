import axios, { type AxiosResponse } from "axios";

const GPT_IMAGE_API_URL = "https://training.nerdbord.io/api/v1/openai/images/generations";
const GPT_API_KEY = process.env.GPT_API_KEY;

type GPTResponse = {
	created: number;
	data: { url: string }[];
};

export const generateGPTImage = async (prompt: string) => {
	const response: AxiosResponse<GPTResponse> = await axios.post(
		GPT_IMAGE_API_URL,
		{
			prompt,
			n: 1,
			size: "1024x1024",
		},
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${GPT_API_KEY}`,
			},
		},
	);

	console.log("GPT Image API response:", JSON.stringify(response.data, null, 2));
	const imageUrl = response.data.data[0].url;
	return imageUrl;
};
