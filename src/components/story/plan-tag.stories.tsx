import type { Meta, StoryObj } from '@storybook/react';

import PlanTag from '@/components/ui/plan-tag';

const meta: Meta<typeof PlanTag> = {
  title: 'PlanTag',
  component: PlanTag,
  args: {
    variant: 'proPlan',
    children: 'Test',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['noPlan', 'proPlan', 'address'],
    },
    children: {
      control: 'text',
    },
  },
};

type Story = StoryObj<typeof PlanTag>;

export const Default: Story = {
  render: (args) => <PlanTag {...args}></PlanTag>,
};

export default meta;
