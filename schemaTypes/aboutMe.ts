// schemas/aboutMe.ts
import { defineField, defineType } from "sanity";

export const aboutMe = defineType({
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'italianContent',
      title: 'Contenuto Italiano (HTML)',
      type: 'text',
      rows: 20,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'englishContent',
      title: 'English Content (HTML)',
      type: 'text',
      rows: 20,
      validation: (rule) => rule.required()
    })
  ]
});