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
    {
      name: 'projects',
      type: 'array',
      label: 'Projects',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'tech',
          type: 'array',
          label: 'Technologies',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'github',
          type: 'text',
          label: 'GitHub Link',
        },
        {
          name: 'live',
          type: 'text',
          label: 'Live Link',
        },
      ],
    },
  ],
};

export default Homepage; 