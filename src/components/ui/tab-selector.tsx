import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Text } from './text';

const tabSelectorVariants = cva(
  'py-1 px-2.5 rounded-full w-fit flex transition-colors duration-200',
  {
    variants: {
      selected: {
        true: 'bg-colors-gray-900 border border-colors-gray-900 text-colors-white hover:border-colors-black hover:bg-colors-black',
        false:
          'border border-colors-border text-colors-gray-500 hover:border-colors-gray-600 hover:text-colors-gray-600',
      },
    },
    defaultVariants: {
      selected: true,
    },
  },
);

type tabSelectorProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof tabSelectorVariants>;

export default function TabSelector({ selected, children, ...props }: tabSelectorProps) {
  return (
    <Text
      asChild
      size={'caption'}
      weight={'medium'}
      className={tabSelectorVariants({ selected })}
      {...props}
    >
      <span>{children}</span>
    </Text>
  );
}
