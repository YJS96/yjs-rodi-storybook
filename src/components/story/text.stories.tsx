import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/components/ui/text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  args: {
    size: 'display-05',
    weight: 'bold',
    align: 'left',
    children: 'Display Text',
    as: 'p',
    asChild: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: [
        'display-05',
        'display-04',
        'display-03',
        'display-02',
        'display-01',
        'headline',
        'subhead-03',
        'subhead-02',
        'subhead-01',
        'subhead-00',
        'body-03',
        'body-02',
        'body-01',
        'caption',
      ],
    },
    weight: {
      control: 'select',
      options: ['bold', 'semibold', 'medium', 'regular'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    as: {
      control: 'select',
      options: [undefined, 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'p'],
    },
  },
  decorators: [
    (Story, context) => {
      const { args } = context;

      // asChild가 true이면서 as가 설정된 경우 해당 as 속성을 제거
      const { asChild, as, ...restArgs } = args;
      const modifiedArgs = asChild ? { ...restArgs, as: undefined } : args;

      return <Story {...context} args={modifiedArgs} />;
    },
  ],
};

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => (
    <>
      <Text {...args} />
    </>
  ),
};

export default meta;
