import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <Flex asChild justify="center">
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto w-full justify-center', className)}
      {...props}
    />
  </Flex>
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <Flex asChild direction="row" align="center" gap="1">
      <ul ref={ref} className={cn(className)} {...props} />
    </Flex>
  ),
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />,
);
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<'a'>;

const PaginationLink = ({ className, isActive, ...props }: PaginationLinkProps) => (
  <Text asChild size="subhead-02" weight={isActive ? 'medium' : 'regular'}>
    <Flex asChild display="inline-flex" align="center" justify="center" gap="0.25">
      <a
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          isActive ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-gray-900',
          'h-[40px] w-[40px] whitespace-nowrap rounded-md border-0 hover:cursor-pointer',
          className,
        )}
        {...props}
      />
    </Flex>
  </Text>
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className="size-4 stroke-gray-500 hover:cursor-pointer hover:stroke-gray-900" />
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" className={cn('gap-1 pr-2.5', className)} {...props}>
    <ChevronRight className="size-4 stroke-gray-500 hover:cursor-pointer hover:stroke-gray-900" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <Flex asChild align="center" justify="center">
    <span aria-hidden className={cn('h-9 w-9 text-gray-500', className)} {...props}>
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  </Flex>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
