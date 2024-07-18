import { getLatestPost } from "@/api/actions";
import { generateGPTContent } from "@/utils/generateGPTContent";
import { generateGPTImage } from "@/utils/generateGPTImage";
import { serializePortableTextToString } from "@/utils/serializePortableTextToString";

const generateTitle = async (latestPostTitle: string) => {
	const prompt = `Oto tytuł ostatniego posta: "${latestPostTitle}". Wygeneruj nowy, humorystyczny tytuł postu na blogu w takim wulgarnym kurwa stylu o przetrwaniu w Polsce, ale jakiś inny temat. napisz czysty output`;

	try {
		const title = await generateGPTContent(prompt);

		return title;
	} catch (error) {
		console.error("Error generating title:", error);
		throw error;
	}
};

const generateContent = async (title: string, latestPostContent: string) => {
	const prompt = `Oto treść ostatniego posta: "${latestPostContent}".
Wygeneruj nowy, humorystyczny post w takim wulgarnym jebanym stylu na blogu o przetrwaniu w Polsce na temat: "${title}". Zbuduj post używając tagów HTML, takich jak: <h1>, <h2>, <h3>, <h4>, <p>, <strong>, <em>, <a>, <li>, <ul>, <ol>, <blockquote>. Nie używaj w ogóle znaku "/n". Przedstaw odpowiedź w postaci '<html><body>'Twoja odpowiedź'</body></html>'. Napisz czysty output.`;

	try {
		const content = await generateGPTContent(prompt);

		return content;
	} catch (error) {
		console.error("Error generating content:", error);
		throw error;
	}
};

const generateImage = async (title: string) => {
	const prompt = `Create a humorous and angry image in a vulgar style, matching the title: "${title}". The image should have a consistent artistic style that fits the theme.`;
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
