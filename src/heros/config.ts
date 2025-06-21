import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Home Page Hero',
          value: 'homePageHero',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'mainTitle',
      type: 'text',
      localized: true,
      admin: {
        condition: (_, { type }: { type?: string }) => type === 'homePageHero',
      },
    },
    {
      name: 'secondaryTitles',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
      ],
      admin: {
        condition: (_, { type }: { type?: string }) => type === 'homePageHero',
      },
    },
    linkGroup({
      overrides: {
        name: 'actionButtons',
        maxRows: 2,
        admin: {
          condition: (_, { type }: { type?: string }) => type === 'homePageHero',
        },
      },
    }),
    {
      name: 'optionalText',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
        },
      ],
      admin: {
        condition: (_, { type }: { type?: string }) => type === 'homePageHero',
      },
      maxRows: 5,
    },
    {
      name: 'homePageHeroMedia',
      label: 'Homepage Hero Media',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, { type }: { type?: string }) => {
          if (type && ['homePageHero'].includes(type)) {
            return true
          }
          return false
        },
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type }: { type?: string }) => {
          if (type && ['highImpact', 'mediumImpact'].includes(type)) {
            return true
          }
          return false
        },
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
