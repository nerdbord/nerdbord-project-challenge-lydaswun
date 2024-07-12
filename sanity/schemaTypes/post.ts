import {defineField, defineType} from 'sanity'

export const Post = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of the post',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of the post',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required().error('Required to generate a page on the website'),
      hidden: ({document}) => !document?.title,
    }),
    {
      name: 'author',
      type: 'reference',
      title: 'Author of the post',
      to: [{type: 'author'}],
    },
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main image of the post',
    }),
    {
      name: 'categories',
      type: 'reference',
      title: 'Categories of the post',
      to: [{type: 'category'}],
      description: 'Select categories for this post',
    },
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publication date of the post',
    }),
    defineField({
      name: 'preview',
      type: 'string',
      title: 'Preview of the post',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Full content of the post',
      of: [{type: 'block'}],
    }),
  ],
})
