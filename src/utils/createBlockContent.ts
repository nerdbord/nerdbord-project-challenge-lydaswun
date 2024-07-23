/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { htmlToBlocks } from "@sanity/block-tools";
import { JSDOM } from "jsdom";
import { type FieldDefinition } from "sanity";
import { Schema } from "@sanity/schema";

const defaultSchema = Schema.compile({
	name: "myBlog",
	types: [
		{
			name: "post",
			type: "document",
			fields: [
				{
					name: "content",
					type: "array",
					title: "Full content of the post",
					of: [{ type: "block" }],
				},
			],
		},
	],
});

const blockContentSchema = defaultSchema
	.get("post")
	.fields.find((field: FieldDefinition) => field.name === "content").type;

export const createBlockContent = (html: string) => {
	return htmlToBlocks(html, blockContentSchema, {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		parseHtml: (html) => new JSDOM(html).window.document,
	});
};
