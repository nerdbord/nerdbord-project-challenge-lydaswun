import { getLatestPost } from "@/api/actions";
import { generateGPTContent } from "@/utils/generateGPTContent";
import { generateGPTImage } from "@/utils/generateGPTImage";
import { serializePortableTextToString } from "@/utils/serializePortableTextToString";

const generateTitle = async (latestPostTitle: string) => {
	const prompt = `Your role is to be a very talented and internet-famous pathologist. You run a popular survival blog about "How to live in Poland". Your task is to come up with a topic for a new, interesting blog article. The topic can be from any field, for example wise shopping, dealing with official matters, school, work, etc. The topic must comply with the rules of the Polish language and contain one word commonly considered a swear word. Your topic must also be specific, simple, fun and interesting. The maximum length of the subject line is five words, and each first letter must be uppercase. The topic of the new article must be different from the previous one - ${latestPostTitle}.`;

	try {
		const title = await generateGPTContent(prompt);

		return title;
	} catch (error) {
		console.error("Error generating title:", error);
		throw error;
	}
};

const generateContent = async (title: string, latestPostContent: string) => {
	const prompt = `
Your role is to be a very talented and internet-famous pathologist. You run a popular survival blog about "How to live in Poland." Your task is to create a new blog entry that is humorous and interesting about ${title}. The topic must comply with the rules of the Polish language and contain words commonly considered swear words. Build your post using HTML tags such as: <h1>, <h2>, <h3>, <h4>, <p>, <strong>, <em>, <a>, <li>, <ul>, <ol>, <blockquote>. Don't use the "/n" character at all. Express your answer as '<html><body>'Your answer'</body></html>'. Write clean output. The post must be different from the previous one. The previous post is: ${latestPostContent}. Put your post in the form of a blog entry. Remember to include a title, introduction, main part, and conclusion. The post must be at least 500 words long. At the end of the post, include a link to the previous post. The post must be humorous, slightly vulgar, and of the highest possible quality. Sign post as "Buziaczki od Waszego PatoBlogera".
`;

	try {
		const content = await generateGPTContent(prompt);

		return content;
	} catch (error) {
		console.error("Error generating content:", error);
		throw error;
	}
};

const generateImage = async (title: string) => {
	const prompt = `Your role is to be a computer graphic designer with great skills. You collaborate with a friend pathoblogger to create beautiful and detailed images for his  posts. Your task is to create an illustration that matches the new post titled: ${title}. The illustration must be humorous, slightly vulgar and of the highest possible quality. You are prohibited from placing subtitles or other texts on the image.`;
	try {
		const imgUrl = await generateGPTImage(prompt);

		return imgUrl;
	} catch (error) {
		console.error("Error generating image:", error);
		throw error;
	}
};

export const generatePostContent = async () => {
	try {
		const latestPost = await getLatestPost();

		let newPostTitle: string;
		let newPostContent: string;

		if (latestPost) {
			const { title, content } = latestPost;
			const serializedContent = serializePortableTextToString(content);

			newPostTitle = await generateTitle(title);
			newPostContent = await generateContent(newPostTitle, serializedContent);
		} else {
			newPostTitle = await generateTitle("Dowolny tytuł");
			newPostContent = await generateContent(newPostTitle, "Dowolna treść");
		}

		const newPostImageUrl = await generateImage(newPostTitle);

		return { newPostTitle, newPostContent, newPostImageUrl };
	} catch (error) {
		console.error("Error generating post content:", error);
		throw error;
	}
};
