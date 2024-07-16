import { groq } from "next-sanity";

const postCardFields = groq`
    _id,
    title,
    "slug": slug.current,
    "mainImage": {
        "image": mainImage,
        "alt": mainImage.alt
    },
    "categories": categories[]->{
        _id,
        name
    },
    likes,
    visitors
    `;

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
    ${postCardFields},
    "author": {
        "name": author->name,
        "authorAvatar": {
            "image": author->authorAvatar,
            "alt": author->authorAvatar.alt
        }
    },
    publishedAt,
    content,
  }`;

export const ALL_POSTS_QUERY = groq`*[_type == "post" && popular == null] | order(publishedAt desc){
    ${postCardFields}
  }`;

export const POPULAR_POST_QUERY = groq`*[_type == "post" && popular == true][0]{
    ${postCardFields},
    "author": author->{name},
    preview,
    publishedAt,
  }`;
