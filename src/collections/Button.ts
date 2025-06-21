import { CollectionConfig } from 'payload/types';

export const Button: CollectionConfig = {
  slug: 'button',
  labels: {
    singular: 'Button',
    plural: 'Buttons',
  },
  fields: [
    {
      name: 'label',
      label: 'Label',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      label: 'Link',
      type: 'text',
      required: true,
    },
    {
      name: 'variant',
      label: 'Variant',
      type: 'select',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Destructive', value: 'destructive' },
        { label: 'Ghost', value: 'ghost' },
        { label: 'Link', value: 'link' },
        { label: 'Outline', value: 'outline' },
        { label: 'Secondary', value: 'secondary' },
      ],
      required: true,
      defaultValue: 'default',
    },
  ],
};

export default Button; 