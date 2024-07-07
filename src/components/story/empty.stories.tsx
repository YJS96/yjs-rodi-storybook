import type { Meta, StoryObj } from '@storybook/react';

import Empty from '../ui/empty';

const meta: Meta<typeof Empty> = {
  title: 'Empty',
  component: Empty,
  args: {
    type: 'long',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['long', 'short'],
    },
  },
};

type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: (args) => <Empty {...args} />,
};

export default meta;
