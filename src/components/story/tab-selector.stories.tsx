import type { Meta, StoryObj } from '@storybook/react';

import TabSelector from '../ui/tab-selector';

const meta: Meta<typeof TabSelector> = {
  title: 'TabSelector',
  component: TabSelector,
  args: {
    selected: true,
    children: 'Test',
  },
  argTypes: {
    selected: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

type Story = StoryObj<typeof TabSelector>;

export const Default: Story = {
  render: (args) => <TabSelector {...args}></TabSelector>,
};

export default meta;
