import type { Meta, StoryObj } from '@storybook/react';

import { SearchBox } from '@/components/ui/search-box';

const meta: Meta<typeof SearchBox> = {
  title: 'SearchBox',
  component: SearchBox,
  args: {
    placeholder: '검색어를 입력해주세요',
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'disabled', 'error'],
    },
    size: {
      control: 'select',
      options: ['default', 'small-38', 'small-28'],
    },
  },
};

type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
  render: (args) => <SearchBox {...args}></SearchBox>,
};

export default meta;
