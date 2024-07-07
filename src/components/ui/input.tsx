import { F } from '@mobily/ts-belt';
import { cva } from 'class-variance-authority';
import React, { createContext, ReactNode, useContext } from 'react';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

type InputContextValue = {
  state: 'default' | 'disabled' | 'error';
  size: 'default' | 'small-38' | 'small-28';
};

const InputContext = createContext<InputContextValue | null>(null);

function useInputContext() {
  const context = useContext(InputContext);
  if (context === null) {
    throw new Error('useInputContext must be used within an InputProvider');
  }
  return context;
}

export interface InputBoxProps {
  children: ReactNode;
  state: 'default' | 'disabled' | 'error';
  size: 'default' | 'small-38' | 'small-28';
}

const InputBox: React.FC<InputBoxProps> = ({ children, state, size }) => {
  const value = { state, size };
  return <InputContext.Provider value={value}>{children}</InputContext.Provider>;
};
InputBox.displayName = 'InputBox';

const inputTitleVariants = cva('mb-2', {
  variants: {
    state: {
      default: 'text-colors-gray-900',
      disabled: 'text-colors-gray-500',
      error: 'text-colors-gray-900',
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

export interface InputBoxTitleVariantsProps extends React.HTMLAttributes<HTMLHeadElement> {}

const InputTitle: React.FC<InputBoxTitleVariantsProps> = ({ children, className, ...props }) => {
  const { state, size } = useInputContext();
  return (
    <>
      {!F.equals(size, 'small-28') && (
        <Text
          as="h3"
          size="body-02"
          weight="medium"
          className={cn(inputTitleVariants({ state }), className)}
          {...props}
        >
          {children}
        </Text>
      )}
    </>
  );
};
InputTitle.displayName = 'InputTitle';

export const inputContentVariants = cva(
  'w-full text-color-gray-900 border border-input bg-background px-3 ring-offset-background',
  {
    variants: {
      state: {
        default: 'borderborder focus-within:border-gray-900',
        disabled: 'border-gray-400 opacity-50',
        error: 'border-border focus-within:border-destructive',
      },
      size: {
        default: 'h-[46px] py-2 rounded-md',
        'small-38': 'h-[36px] py-1 rounded-md',
        'small-28': 'h-[28px] py-1 rounded-sm',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'default',
    },
  },
);

interface InputContentVariantsProps extends React.HTMLAttributes<HTMLDivElement> {}

const InputContent: React.FC<InputContentVariantsProps> = ({ children, className, ...props }) => {
  const { state, size } = useInputContext();
  return (
    <Flex align="center" className={cn(inputContentVariants({ state, size }))} {...props}>
      {children}
    </Flex>
  );
};
InputContent.displayName = 'InputContent';

const inputTextVariants = cva('font-pretendard shrink-0 pr-2 text-gray-400', {
  variants: {
    size: {
      default: 'text-[14px]',
      'small-38': 'text-[13px]',
      'small-28': 'text-[12px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { state, size } = useInputContext();
    return (
      <Flex asChild grow={1}>
        <input
          type={type}
          disabled={F.equals(state, 'disabled')}
          className={cn(
            inputTextVariants({ size }),
            'text-sm text-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </Flex>
    );
  },
);
Input.displayName = 'Input';

export interface InputAffixProps extends React.HTMLAttributes<HTMLSpanElement> {}

const InputAffix = React.forwardRef<HTMLSpanElement, InputAffixProps>(
  ({ children, className, ...props }, ref) => {
    const { size } = useInputContext();
    return (
      <span className={cn(inputTextVariants({ size }))} ref={ref} {...props}>
        {children}
      </span>
    );
  },
);
InputAffix.displayName = 'InputAffix';

export interface InputErrorTextProps extends React.HTMLAttributes<HTMLElement> {}

const InputErrorText = React.forwardRef<HTMLSpanElement, InputErrorTextProps>(
  ({ children, className, ...props }, ref) => {
    const { state, size } = useInputContext();
    return (
      <>
        {F.equals(state, 'error') && !F.equals(size, 'small-28') && (
          <Text
            as="p"
            size="body-01"
            weight="regular"
            className={cn('ml-2 mt-1 text-destructive')}
            ref={ref}
            {...props}
          >
            {children}
          </Text>
        )}
      </>
    );
  },
);
InputErrorText.displayName = 'InputErrorText';

export { InputBox, InputTitle, InputContent, Input, InputAffix, InputErrorText };
