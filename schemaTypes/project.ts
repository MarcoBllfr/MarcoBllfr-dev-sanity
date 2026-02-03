import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project', //il nome che usera il frontend per ricavare dati / api keywords
  title: 'Project', //il nome del document di sanity
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project name',
      type: 'string',
      validation: (rule) => rule.required(), //campo obbligatorio richiesto
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Project description',
      type: 'localizedString',
    }),
    defineField({
      name: 'slug',
      title: 'Slug - ending of the url to see the project work',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      //opzione per l'img processing(nella creazione) controlla sempre la documentazione
      options: {
        hotspot: true, //hotspot and Crop
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateAccomplished',
      title: 'Date of Accomplished, when you did this project?',
      type: 'date',
      validation: (rule) => rule.required(),
      options: {
        dateFormat: 'YYYY-MM',
      },
    }),
    defineField({
      name: 'content',
      title: 'Project content',
      type: 'localizedBlockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
