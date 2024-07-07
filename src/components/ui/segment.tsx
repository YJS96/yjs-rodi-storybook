import * as React from 'react';

import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

const Segment = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="segment-control"
    className={cn('mx-auto flex', className)}
    {...props}
  />
);
Segment.displayName = 'Segment';

const SegmentContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        'flex h-[38px] flex-row items-center gap-1 rounded-full bg-colors-gray-300 px-[6px]',
        className,
      )}
      {...props}
    />
  ),
);
SegmentContent.displayName = 'SegmentContent';

const SegmentItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />,
);
SegmentItem.displayName = 'SegmentItem';

type SegmentLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<'a'>;

const SegmentLink = ({ className, isActive, ...props }: SegmentLinkProps) => (
  <Text asChild size="subhead-02" weight={isActive ? 'medium' : 'regular'}>
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        isActive
          ? 'bg-colors-white text-colors-main shadow'
          : 'bg-transparent text-colors-gray-500 hover:text-colors-main',
        'inline-flex h-[30px] items-center justify-center gap-1 whitespace-nowrap rounded-full border-0 px-4 transition-colors duration-300 hover:cursor-pointer',
        className,
      )}
      {...props}
    />
  </Text>
);
SegmentLink.displayName = 'SegmentLink';

export { Segment, SegmentContent, SegmentItem, SegmentLink };
