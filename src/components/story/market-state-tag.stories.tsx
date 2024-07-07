import type { Meta, StoryObj } from '@storybook/react';

import MarketStateTag from '../ui/market-state-tag';

const meta: Meta<typeof MarketStateTag> = {
  title: 'MarketStateTag',
  component: MarketStateTag,
  args: {
    state: 'success',
    children: 'Test',
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['success', 'error', 'warning'],
    },
    children: {
      control: 'text',
    },
  },
};

type Story = StoryObj<typeof MarketStateTag>;

export const Default: Story = {
  render: (args) => <MarketStateTag {...args}></MarketStateTag>,
};

export default meta;
