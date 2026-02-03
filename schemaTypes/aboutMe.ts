// schemas/aboutMe.ts
import { defineField, defineType } from "sanity";

export const aboutMe = defineType({
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'localizedBlockContent',
      validation: rule => rule.required()
    })
  ]
});