import type { Meta, StoryObj } from '@storybook/react';

import { Paging } from '@/components/ui/paging';

const PagingExample: React.FC<{ totalPage: number; itemsPerGroup: number }> = ({
  totalPage,
  itemsPerGroup,
}) => {
  return <Paging totalPage={totalPage} itemsPerGroup={itemsPerGroup} onChange={() => {}} />;
};

const meta: Meta<typeof Paging> = {
  title: 'Paging',
  component: Paging,
  args: {
    totalPage: 30,
    itemsPerGroup: 6,
  },
};

type Story = StoryObj<typeof Paging>;

export const Default: Story = {
  render: (args) => <PagingExample {...args} />,
};

export default meta;
