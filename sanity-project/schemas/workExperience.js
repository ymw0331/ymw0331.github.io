export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {

            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'array',
            of: [
                {
                    name: 'desc',
                    title: 'Desc',
                    type: 'string'
                }
            ]
        }
    ]
}