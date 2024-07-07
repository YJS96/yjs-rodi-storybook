import type { Meta, StoryObj } from '@storybook/react';

import SideBar from '../layout/sidebar';

const meta: Meta<typeof SideBar> = {
  title: 'SideBar',
  component: SideBar,
};

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  render: () => <SideBar></SideBar>,
};

export default meta;
