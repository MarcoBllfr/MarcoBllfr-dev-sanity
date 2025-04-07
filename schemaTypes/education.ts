import { defineField, defineType } from "sanity";

export const education = defineType({
    name:'education',
    title:'Education Experience',
    type:'document',
    fields:[
        defineField({
            name: 'titolo',
            title: 'Titolo di studio',
            type:'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'scuola',
            title: 'Scuola o Univeristà o ente',
            type:'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'descrizione',
            title: 'descrizione titolo',
            type:'string',
            validation: (rule) => rule.required() 
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type:'date',
            validation: (rule) => rule.required(),
            options:{
                dateFormat:'YYYY-MM',
            }
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type:'date',
            options:{
                dateFormat:'YYYY-MM',
            }
        }),
    ]
});