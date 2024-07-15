import { type PortableTextBlock } from "@portabletext/types";

export type PostCardType = {
	_id: string;
	title: string;
	slug: string;
	mainImage: ImageType;
	categories: CategoryType[];
};

export type PopularPostType = PostCardType & {
	author: AuthorType;
	publishedAt: Date;
	preview: string;
};

export type PostDetailedType = PostCardType & {
	author: AuthorType;
	publishedAt: Date;
	content: PortableTextBlock[];
};

export type AuthorType = {
	name: string;
	authorAvatar?: ImageType;
};

export type ImageType = {
	image: unknown;
	asset: {
		_ref: string;
	};
	alt: string;
};

export type CategoryType = {
	_id: string;
	name: string;
};
