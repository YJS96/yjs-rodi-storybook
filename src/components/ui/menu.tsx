import * as React from 'react';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

const Menu = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <Flex asChild>
    <nav role="navigation" aria-label="menu" className={cn('mx-auto', className)} {...props} />
  </Flex>
);
Menu.displayName = 'Menu';

const MenuContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <Flex asChild direction="row" align="center" gap="0.25">
      <ul ref={ref} className={cn('h-[38px] px-[6px]', className)} {...props} />
    </Flex>
  ),
);
MenuContent.displayName = 'MenuContent';

type MenuItemProps = {
  isActive?: boolean;
} & React.ComponentProps<'li'>;

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ children, className, isActive, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(isActive ? 'text-colors-gray-900' : 'hover:text-colors-gray-900', className)}
      {...props}
    >
      <Flex
        align="center"
        justify="center"
        gap="0.25"
        className={cn(
          isActive ? 'border-b-2 border-colors-gray-900' : 'text-colors-gray-400',
          'mx-4 transition-colors duration-200 ',
        )}
      >
        {children}
      </Flex>
    </li>
  ),
);
MenuItem.displayName = 'MenuItem';

const MenuLink = React.forwardRef<HTMLAnchorElement, React.ComponentProps<'a'>>(
  ({ className, ...props }, ref) => (
    <Text asChild size="subhead-03" weight="semibold">
      <Flex asChild align="center" justify="center" gap="0.25">
        <a
          className={cn(
            'whitespace-nowrap bg-transparent py-2 transition-colors duration-100 hover:cursor-pointer',
            className,
          )}
          {...props}
        />
      </Flex>
    </Text>
  ),
);
MenuLink.displayName = 'MenuLink';

const MenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ children }, ref) => {
    if (!children) {
      return null;
    }

    return (
      <Flex
        align="center"
        justify="center"
        ref={ref}
        className={cn('h-[17px] w-[17px] rounded-full bg-colors-red text-colors-white')}
      >
        <Text as="p" size="subhead-00" weight="semibold">
          {children}
        </Text>
      </Flex>
    );
  },
);
MenuBadge.displayName = 'MenuBadge';

export { Menu, MenuContent, MenuItem, MenuLink, MenuBadge };
