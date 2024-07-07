import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const textVariant = cva('leading-[200%] tracking-[-1.25%] font-pretendard', {
  variants: {
    size: {
      'display-05': 'text-[40px]',
      'display-04': 'text-[36px]',
      'display-03': 'text-[32px]',
      'display-02': 'text-[28px]',
      'display-01': 'text-[24px]',
      headline: 'text-[18px]',
      'subhead-03': 'text-[16px]',
      'subhead-02': 'text-[14px]',
      'subhead-01': 'text-[12px]',
      'subhead-00': 'text-[10px]',
      'body-03': 'text-[16px]',
      'body-02': 'text-[14px]',
      'body-01': 'text-[13px]',
      caption: 'text-[12px]',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      regular: 'font-normal',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    size: 'body-03',
    weight: 'regular',
    align: 'left',
  },
});

type TextElement = React.ElementRef<'span'>;
type TextOwnProps = VariantProps<typeof textVariant> & {
  asChild?: boolean;
};

type TextAsChildProps = { asChild: true; as?: never } & ComponentPropsWithoutRef<'span'>;
type TextH1Props = { as: 'h1'; asChild?: false } & ComponentPropsWithoutRef<'h1'>;
type TextH2Props = { as: 'h2'; asChild?: false } & ComponentPropsWithoutRef<'h2'>;
type TextH3Props = { as: 'h3'; asChild?: false } & ComponentPropsWithoutRef<'h3'>;
type TextH4Props = { as: 'h4'; asChild?: false } & ComponentPropsWithoutRef<'h4'>;
type TextH5Props = { as: 'h5'; asChild?: false } & ComponentPropsWithoutRef<'h5'>;
type TextPProps = { as: 'p'; asChild?: false } & ComponentPropsWithoutRef<'p'>;
type TextProps = TextOwnProps &
  (
    | TextAsChildProps
    | TextH1Props
    | TextH2Props
    | TextH3Props
    | TextH4Props
    | TextH5Props
    | TextPProps
  );

const Text = forwardRef<TextElement, TextProps>(
  (
    { children, asChild, as: Tag = 'p', size, weight, align, className, ...textProps },
    forwardedRef,
  ) => {
    return (
      <Slot
        {...textProps}
        ref={forwardedRef}
        className={cn(textVariant({ size, weight, align }), className)}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);
Text.displayName = 'Text';

export { Text };
export type { TextProps };
