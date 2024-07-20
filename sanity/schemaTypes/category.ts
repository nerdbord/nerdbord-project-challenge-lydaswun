import {defineField, defineType} from 'sanity'

export const Category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the category',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Press generate to generate the slug automatically, do not manually input slug',
      options: {
        source: 'name',
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
      readOnly: ({value}) => (value ? true : false),
    }),
  ],
})
