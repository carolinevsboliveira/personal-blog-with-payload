import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/ui'

const textVariants = cva('', {
  variants: {
    variant: {
      'heading-h1': 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      'heading-h2': 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      'heading-h3': 'scroll-m-20 text-2xl font-semibold tracking-tight',
      'heading-h4': 'scroll-m-20 text-xl font-semibold tracking-tight',
      default: 'leading-7 [&:not(:first-child)]:mt-6',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type TextElement = React.ComponentRef<'p'>
type TextProps = React.ComponentPropsWithoutRef<'p'> &
  VariantProps<typeof textVariants> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
  }

const Text = React.forwardRef<TextElement, TextProps>(
  ({ className, variant, as, ...props }, ref) => {
    const getElement = () => {
      if (as) return as
      switch (variant) {
        case 'heading-h1':
          return 'h1'
        case 'heading-h2':
          return 'h2'
        case 'heading-h3':
          return 'h3'
        case 'heading-h4':
          return 'h4'
        case 'large':
        case 'small':
        case 'muted':
        case 'default':
          return 'p'
        default:
          return 'p'
      }
    }
    const Comp = getElement()
    return <Comp className={cn(textVariants({ variant, className }))} ref={ref} {...props} />
  },
)

Text.displayName = 'Text'

export { Text, textVariants }
