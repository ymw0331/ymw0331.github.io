export default {
    name: 'certificates',
    title: 'Certificates',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        // {
        //     name: 'description',
        //     title: 'Description',
        //     type: 'string',
        // },
        {
            name: 'certificateLink',
            title: 'Certificate Link',
            type: 'string',
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        },
    ],
};