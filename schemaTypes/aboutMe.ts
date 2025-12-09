// schemas/aboutMe.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Titolo Sezione',
      type: 'object',
      fields: [
        {name: 'it', title: 'Italiano', type: 'string'},
        {name: 'en', title: 'English', type: 'string'}
      ]
    }),
    defineField({
      name: 'profileImage',
      title: 'Immagine Profilo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragrafi Biografia',
      type: 'object',
      fields: [
        {
          name: 'it',
          title: 'Italiano',
          type: 'array',
          of: [{type: 'text'}]
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{type: 'text'}]
        }
      ]
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Testo Pulsante CTA',
      type: 'object',
      fields: [
        {name: 'it', title: 'Italiano', type: 'string'},
        {name: 'en', title: 'English', type: 'string'}
      ]
    })
  ]
})