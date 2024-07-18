import speakingurl from "speakingurl";

export const slugify = (title: string) => {
	return speakingurl(title, { symbols: true });
};
