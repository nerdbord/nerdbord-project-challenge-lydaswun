import createImageUrlBuilder from "@sanity/image-url";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";

const imageBuilder = createImageUrlBuilder({ projectId: "dr96nfh9", dataset: "production" });
export const urlForImage = (source: SanityImageSource) => {
	return imageBuilder.image(source);
};
