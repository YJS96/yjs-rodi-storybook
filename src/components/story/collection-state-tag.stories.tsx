import type { Meta, StoryObj } from '@storybook/react';

import CollectionStateTag from '@/components/ui/collection-state-tag';

const meta: Meta<typeof CollectionStateTag> = {
  title: 'CollectionStateTag',
  component: CollectionStateTag,
  args: {
    state: 'success',
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['success', 'error', 'warning'],
    },
  },
};

type Story = StoryObj<typeof CollectionStateTag>;

export const Default: Story = {
  render: (args) => <CollectionStateTag {...args} />,
};

export default meta;
