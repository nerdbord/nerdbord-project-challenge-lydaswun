/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { htmlToBlocks } from "@sanity/block-tools";
import { JSDOM } from "jsdom";
import { type FieldDefinition } from "sanity";
import { Schema } from "@sanity/schema";
import { schemaTypes } from "../../sanity/schemaTypes";

const defaultSchema = Schema.compile({ types: schemaTypes });

const blockContentSchema = defaultSchema
	.get("post")
	.fields.find((field: FieldDefinition) => field.name === "content").type;

export const createBlockContent = (html: string) => {
	return htmlToBlocks(html, blockContentSchema, {
		parseHtml: (html) => new JSDOM(html).window.document,
	});
};
