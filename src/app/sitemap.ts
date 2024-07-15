import type { MetadataRoute } from "next";

//change the url to domain after upload

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://acme.com/",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
	];
}
