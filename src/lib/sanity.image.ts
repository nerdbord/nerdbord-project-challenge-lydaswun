import createImageUrlBuilder from "@sanity/image-url";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "@sanity/client";

const sanityClient = createClient({
	projectId: "dr96nfh9",
	dataset: "production",
	apiVersion: "2021-08-31",
	useCdn: true,
});

const imageBuilder = createImageUrlBuilder(sanityClient);

export const urlForImage = (source: SanityImageSource) => {
	return imageBuilder.image(source);
};
