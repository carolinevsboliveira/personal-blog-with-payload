import type { CollectionConfig } from 'payload'
import { hero } from '@/heros/config'

const Homepage: CollectionConfig = {
  slug: 'homepage',
  admin: {
    description: 'Homepage content and hero section',
  },
  fields: [hero],
};

export default Homepage; 