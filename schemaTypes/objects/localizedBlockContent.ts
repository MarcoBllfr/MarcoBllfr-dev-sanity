import { defineType, defineField } from 'sanity'
// oggett per i blocco testo
export const localizedBlockContent = defineType({
  name: 'localizedBlockContent',
  title: 'Localized Rich Text',
  type: 'object',
  fields: [
    defineField({ name: 'it', title: 'Italiano', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'en', title: 'English', type: 'array', of: [{ type: 'block' }, { type: 'image' }] })
  ]
})