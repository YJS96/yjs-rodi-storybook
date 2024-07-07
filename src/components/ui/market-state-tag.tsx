import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { match } from 'ts-pattern';

import { Text } from './text';

import WarningIcon from '../../../public/images/icon-12-emergency-fill.svg';
import ErrorIcon from '../../../public/images/icon-16-information-red.svg';
import SuccessIcon from '../../../public/images/icon-16-roundcheck-main.svg';

const marketStateTagVariants = cva(
  'py-1 px-2 gap-x-1 bg-colors-gray-200 rounded-sm w-fit flex justify-center items-center',
  {
    variants: {
      state: {
        success: 'text-colors-main',
        error: 'text-colors-red',
        warning: 'text-colors-warning',
      },
    },
    defaultVariants: {
      state: 'success',
    },
  },
);

type marketStateTagProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof marketStateTagVariants>;

export default function MarketStateTag({ state, children, ...props }: marketStateTagProps) {
  return (
    <div className={marketStateTagVariants({ state })} {...props}>
      <div className="size-3 overflow-hidden">
        {match(state)
          .with('success', () => <SuccessIcon />)
          .with('error', () => <ErrorIcon width="12" height="12" viewBox="0 0 16 16" />)
          .with('warning', () => <WarningIcon />)
          .otherwise(() => null)}
      </div>
      <Text asChild size={'subhead-01'} weight={'medium'}>
        <span>{children}</span>
      </Text>
    </div>
  );
}
