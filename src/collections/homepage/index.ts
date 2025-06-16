import type { CollectionConfig } from 'payload'

const Homepage: CollectionConfig = {
  slug: 'homepage',
  admin: {
    description: 'Homepage content and hero section',
  },
  fields: [
    {
      type: 'group',
      name: 'hero',
      label: 'Hero',
      fields: [
        {
          name: 'bgImage',
          label: 'Background Image',
          type: 'text',
          required: false,
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          label: 'Subtitle',
          type: 'text',
          required: false,
        },
        {
          name: 'actionsButton',
          label: 'Actions Button',
          type: 'relationship',
          relationTo: 'button',
          hasMany: true,
          required: false,
        },
      ],
    },
  ],
};

export default Homepage; 