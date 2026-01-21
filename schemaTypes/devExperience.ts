import { defineField, defineType } from "sanity";

export const devExperience = defineType({
    name:'devExperience',//il nome che usera il frontend per ricavare dati
    title:'Development Experience',//il nome del document di sanity
    type:'document',
    fields:[
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type:'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'company',
            title: 'Company',
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
        defineField({
            name: 'descrizione',
            title: 'descrizione',
            type:'string',
        }),
        defineField({
            name: 'technologies',
            title: 'Tech Stack',
            type:'array',
            of:[{type:'string'}],
            options:{
                layout:"tags",
            },
        }),

    ]
});