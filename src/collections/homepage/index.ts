import type { CollectionConfig } from 'payload'
import { hero } from '@/heros/config'

const Homepage: CollectionConfig = {
  slug: 'homepage',
  admin: {
    description: 'Homepage content and hero section',
  },
  fields: [
    hero,
    {
      name: 'careerJourney',
      type: 'array',
      label: 'Career Journey',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'company',
          type: 'text',
          required: true,
        },
        {
          name: 'period',
          type: 'text',
          required: true,
        },
        {
          name: 'location',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
};

export default Homepage; 