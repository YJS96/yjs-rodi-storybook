import type { Meta, StoryObj } from '@storybook/react';

import HomeGray from '~/public/images/icon_20_home-gray.svg';

import SideBarButton from '../ui/sidebar-button';

const meta: Meta<typeof SideBarButton> = {
  title: 'SideBarButton',
  component: SideBarButton,
  args: {
    selected: true,
    Icon: HomeGray,
    svgColor: 'fill',
    children: 'Test',
  },
  argTypes: {
    selected: {
      control: 'boolean',
    },
    svgColor: {
      control: 'select',
      options: ['stroke', 'fill'],
    },
    children: {
      control: 'text',
    },
  },
};

type Story = StoryObj<typeof SideBarButton>;

export const Default: Story = {
  render: (args) => <SideBarButton {...args}></SideBarButton>,
};

export default meta;
