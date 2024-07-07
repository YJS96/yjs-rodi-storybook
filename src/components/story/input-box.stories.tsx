import type { Meta, StoryObj } from '@storybook/react';

import {
  Input,
  InputAffix,
  InputBox,
  InputContent,
  InputErrorText,
  InputTitle,
} from '@/components/ui/input';

const meta: Meta<typeof InputBox> = {
  title: 'InputBox',
  component: InputBox,
  args: {},
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

type Story = StoryObj<typeof InputBox>;

export const Default: Story = {
  render: ({ state, size }) => (
    <InputBox state={state} size={size}>
      <InputTitle>이름</InputTitle>
      <InputContent>
        <InputAffix>성/이름</InputAffix>
        <Input placeholder="김로디"></Input>
        <InputAffix>00/00</InputAffix>
      </InputContent>
      <InputErrorText>올바른 형식으로 입력해주세요</InputErrorText>
    </InputBox>
  ),
};

export default meta;
