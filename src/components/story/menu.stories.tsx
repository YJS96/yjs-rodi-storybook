import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Menu, MenuBadge, MenuContent, MenuItem, MenuLink } from '@/components/ui/menu';

export type MenuItemType = {
  title: string;
  badgeNum?: number;
};

const MenuExample: React.FC<{ items: MenuItemType[] }> = ({ items }) => {
  let [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Menu>
      <MenuContent>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            isActive={currentIndex === index}
            onClick={() => {
              setCurrentIndex(index);
            }}
          >
            <MenuLink>{item.title}</MenuLink>
            <MenuBadge>{item.badgeNum}</MenuBadge>
          </MenuItem>
        ))}
      </MenuContent>
    </Menu>
  );
};

const meta: Meta<typeof MenuExample> = {
  title: 'Menu',
  component: MenuExample,
  args: {
    items: [
      { title: '대분류01', badgeNum: 1 },
      { title: '대분류02' },
      { title: '대분류03', badgeNum: 3 },
    ],
  },
};

type Story = StoryObj<typeof MenuExample>;

export const Default: Story = {
  render: (args) => <MenuExample {...args} />,
};

export default meta;
