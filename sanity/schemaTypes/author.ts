import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const Author = defineType({
  name: 'author',
  icon: UserIcon,
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of the author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorAvatar',
      type: 'image',
      title: 'Author avatar',
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
  ],
})
