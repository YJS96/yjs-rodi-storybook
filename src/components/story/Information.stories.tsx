import type { Meta, StoryObj } from '@storybook/react';

import { Information } from '@/components/ui/information';

const meta: Meta<typeof Information> = {
  title: 'Information',
  component: Information,
  args: {
    description: '추천 단어를 클릭하면 상품명에 추가됩니다.',
  },
};

type Story = StoryObj<typeof Information>;

export const Default: Story = {
  render: (args) => <Information {...args} />,
};

export default meta;
