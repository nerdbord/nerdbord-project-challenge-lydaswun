import { groq } from "next-sanity";

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  "author": {
    "name": author->name,
    "authorAvatar": {
      "image": author->authorAvatar.asset->url,
      "alt": author->authorAvatar.alt
    }
  },
  "mainImage": {
    "image": mainImage.asset->url,
    "alt": mainImage.alt
  },
  "categories": categories[]->{
    _id,
    name
  },
  publishedAt,
  preview,
  content
}`;

export const ALL_POSTS_QUERY = groq`*[_type == "post" && popular == null] | order(publishedAt desc){
  _id,
  title,
  "slug": {
    "current": slug.current
  },
  "author": author->{name},
  "mainImage": {
    "image": mainImage.asset->url,
    "alt": mainImage.alt
  },
  "categories": categories[]->{
    _id,
    name
  },
  preview,
  publishedAt,
}`;

export const POPULAR_POST_QUERY = groq`*[_type == "post" && popular == true][0]{
  _id,
  title,
  "slug": {
    "current": slug.current
  },
  "author": author->{name},
  "mainImage": {
    "image": mainImage.asset->url,
    "alt": mainImage.alt
  },
  "categories": categories[]->{
    _id,
    name
  },
  preview,
  publishedAt,
  popular
}`;
