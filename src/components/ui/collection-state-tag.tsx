import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

import WarningIcon from '~/public/images/icon-12-emergency.svg';
import ErrorIcon from '~/public/images/icon-12-information.svg';
import SuccessIcon from '~/public/images/icon-20-roundcheckgreen.svg';

import { Text } from './text';

const collectionStateTagVariants = cva(
  'py-1 px-2 gap-x-1 text-colors-white rounded-sm w-fit flex justify-center items-center',
  {
    variants: {
      state: {
        success: 'bg-colors-main',
        error: 'bg-colors-red',
        warning: 'bg-colors-warning',
      },
    },
    defaultVariants: {
      state: 'success',
    },
  },
);

type collectionStateTagProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof collectionStateTagVariants>;

type IconAndTextProps = {
  [key in 'success' | 'error' | 'warning']: {
    Icon: typeof SuccessIcon | typeof ErrorIcon | typeof WarningIcon;
    text: string;
  };
};

export default function CollectionStateTag({ state, ...props }: collectionStateTagProps) {
  const iconAndText: IconAndTextProps = {
    success: { Icon: SuccessIcon, text: '업로드 준비' },
    error: { Icon: ErrorIcon, text: '에러 수정 필요' },
    warning: { Icon: WarningIcon, text: '편집 대기 중' },
  };

  const { Icon, text } = iconAndText[state as keyof IconAndTextProps];

  return (
    <div className={collectionStateTagVariants({ state })} {...props}>
      <Icon />
      <Text asChild size={'subhead-01'} weight={'medium'}>
        <span>{text}</span>
      </Text>
    </div>
  );
}
