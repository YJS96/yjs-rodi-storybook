import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Text } from './text';

const planTagVariants = cva('py-0.5 px-2 w-fit flex justify-center items-center', {
  variants: {
    variant: {
      noPlan: 'bg-colors-gray-300 text-colors-gray-700 rounded-full',
      proPlan: 'bg-colors-main-light bg-opacity-20 text-colors-main rounded-full',
      address: 'bg-colors-main-light bg-opacity-20 text-colors-main rounded-sm',
    },
  },
  defaultVariants: {
    variant: 'proPlan',
  },
});

type planTagProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof planTagVariants>;

export default function PlanTag({ variant, children, ...props }: planTagProps) {
  return (
    <div className={planTagVariants({ variant })} {...props}>
      <Text asChild size={'subhead-00'} weight={'bold'}>
        <span>
          {variant === 'noPlan' && '무료체험 Plan'}
          {variant === 'proPlan' && 'Pro Plan'}
          {variant === 'address' && children}
        </span>
      </Text>
    </div>
  );
}
