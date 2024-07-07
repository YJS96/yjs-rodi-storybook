import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from '@/components/ui/toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Toggle',
  component: Toggle,
  args: {},
};

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => <Toggle {...args} />,
};

export default meta;
