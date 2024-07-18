import { type PortableTextBlock } from "next-sanity";

export const serializePortableTextToString = (blocks: PortableTextBlock[]) => {
	return blocks
		.map((block) => {
			if (block._type !== "block" || !block.children) {
				return "";
			}

			return block.children.map((child) => child.text as string).join("");
		})
		.join("\n\n");
};
