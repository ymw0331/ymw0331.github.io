export default {
    name: 'educations',
    title: 'Educations',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'university',
            title: 'University',
            type: 'string',
        },
        {
            name: 'universityLink',
            title: 'UniversityLink',
            type: 'string',
        },
        {
            name: 'degree',
            title: 'Degree',
            type: 'string',
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
        },
    ]
}