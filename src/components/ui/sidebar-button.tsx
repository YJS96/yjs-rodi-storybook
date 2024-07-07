import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Text } from './text';

const sideBarButtonVariants = cva(
  'w-full h-10 px-4 flex items-center gap-x-2.5 rounded-md transition-color duration-200 overflow-hidden',
  {
    variants: {
      selected: {
        true: 'bg-colors-green-10 text-colors-main',
        false: 'text-colors-gray-400 hover:bg-colors-green-10 hover:text-colors-main',
      },
      svgColor: {
        stroke: '',
        fill: '',
      },
    },
    defaultVariants: {
      selected: true,
      svgColor: 'stroke',
    },
  },
);

interface SideBarButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sideBarButtonVariants> {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function SideBarButton({
  selected,
  svgColor,
  children,
  Icon,
  ...props
}: SideBarButtonProps) {
  const iconClass = () => {
    if (selected) {
      if (svgColor === 'stroke') {
        return 'stroke-colors-main';
      } else {
        return 'fill-colors-main';
      }
    } else {
      if (svgColor === 'stroke') {
        return 'stroke-colors-gray-400 group-hover:stroke-colors-main';
      } else {
        return 'fill-colors-gray-400 group-hover:fill-colors-main';
      }
    }
  };

  return (
    <button className={`${sideBarButtonVariants({ selected })} group`} {...props}>
      <Icon className={iconClass()} />
      <Text
        asChild
        size={'body-02'}
        weight={'medium'}
        className="hidden break-keep opacity-0 md:absolute md:ms-8 md:block md:opacity-100 "
      >
        <span>{children}</span>
      </Text>
    </button>
  );
}
