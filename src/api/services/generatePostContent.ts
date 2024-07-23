import { getCategories } from "@/api/actions";
import { getAllTitles } from "@/api/actions/getAllTitles";
import { mapCategoryToCategoryWithRef } from "@/mappers/mapCategoryToCategoryWithRef";
import { generateGPTContent } from "@/utils/generateGPTContent";
import { generateGPTImage } from "@/utils/generateGPTImage";
import { getRandomCategories } from "@/utils/getRandomCategories";

const generateTitle = async (categories: string, lastTitles: string) => {
	const prompt = `Your role is to be a very talented and internet-famous pathologist. You run a popular survival blog about "How to live in Poland". Your task is to come up with a topic for a new, interesting blog article. The topic can be from the fields: ${categories} and should be different than these: ${lastTitles}. The topic must comply with the rules of the Polish language and contain one word commonly considered a swear word. Your topic must also be specific, simple, fun and interesting. The maximum length of the subject line is five words, and each first letter must be uppercase. Please do not use a quotes in the topic. Write clean output.`;

	try {
		const title = await generateGPTContent(prompt);

		return title;
	} catch (error) {
		console.error("Error generating title:", error);
		throw error;
	}
};

const generateContent = async (title: string, categories: string) => {
	const prompt = `
Your role is to be a very talented and internet-famous pathologist. You run a popular survival blog about "How to live in Poland." Your task is to create a new blog entry that is humorous and interesting about ${title}. The topic must comply with the given ${categories}, the rules of the Polish language and contain words commonly considered swear words. Build your post using HTML tags such as: <h1>, <h2>, <h3>, <h4>, <p>, <strong>, <em>, <a>, <li>, <ul>, <ol>, <blockquote>. Don't use the "/n" character at all. Express your answer as '<html><body>'Your answer'</body></html>'. Write clean output. Put your post in the form of a blog entry. Remember to include an introduction, main part, and conclusion. Avoid title in post. The post must be at least 500 words long. The post must be humorous, slightly vulgar, and of the highest possible quality. Sign post as "Buziaczki od Waszego PatoBlogera 😘".
`;

	try {
		const content = await generateGPTContent(prompt);

		return content;
	} catch (error) {
		console.error("Error generating content:", error);
		throw error;
	}
};

const generatePostPreview = async (title: string, content: string) => {
	const prompt = `Your role is to be a very talented and internet-famous pathologist. You run a popular survival blog about "How to live in Poland." You created a new post with the title: ${title} and content: ${content}. Now, you have to create short preview to the post. Create just one sentence. Write clean output. The preview must comply with the rules of Polish language.`;

	try {
		const preview = await generateGPTContent(prompt);

		return preview;
	} catch (error) {
		console.error("Error generating preview:", error);
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
		const categories = await getCategories();
		const lastTitles = (await getAllTitles()).map((title) => title.title).join(", ");

		const newPostCategories = getRandomCategories(categories, 2);
		const newPostCategoriesNames = newPostCategories.map((category) => category.name).join(", ");
		const newPostCategoriesWithRef = newPostCategories.map(mapCategoryToCategoryWithRef);

		const newPostTitle = await generateTitle(newPostCategoriesNames, lastTitles);
		const newPostContent = await generateContent(newPostTitle, newPostCategoriesNames);
		const newPostImageUrl = await generateImage(newPostTitle);
		const newPostPreview = await generatePostPreview(newPostTitle, newPostContent);

		return {
			newPostTitle,
			newPostContent,
			newPostImageUrl,
			newPostCategoriesWithRef,
			newPostPreview,
		};
	} catch (error) {
		console.error("Error generating post content:", error);
		throw error;
	}
};
