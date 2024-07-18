import {BookIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {Author} from './author'
import {format, parseISO} from 'date-fns'

export const Post = defineType({
  name: 'post',
  type: 'document',
  icon: BookIcon,
  title: 'Post',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of the post',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of the post',
      options: {
        source: 'title',
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required().error('Required to generate a page on the website'),
      hidden: ({document}) => !document?.title,
    }),
    {
      name: 'author',
      type: 'reference',
      title: 'Author of the post',
      to: [{type: Author.name}],
    },
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main image of the post',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories of the post',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      description: 'Select categories for this post',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publication date of the post',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'popular',
      type: 'boolean',
      title: 'Popular post',
      description: 'Show this post on the popular posts section',
      initialValue: () => false,
    }),
    defineField({
      name: 'preview',
      type: 'text',
      title: 'Preview of the post',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Full content of the post',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'likes',
      type: 'number',
      readOnly: true,
      initialValue: () => 0,
    }),
    defineField({
      name: 'visitors',
      type: 'number',
      readOnly: true,
      initialValue: () => 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'publishedAt',
      media: 'mainImage',
      popular: 'popular',
    },
    prepare({title, media, author, date, popular}) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
        popular && ' 🔥',
      ].filter(Boolean)

      return {title, media, subtitle: subtitles.join(' ')}
    },
  },
})
