import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import LinkIcon20White from 'public/images/icon-20-link.svg';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
        'transparent',
        'muted',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'small', 'small-rounded'],
    },
  },
};

const iconMapping = {
  default: <LinkIcon20White className="stroke-white" />,
  destructive: <LinkIcon20White className="stroke-white" />,
  outline: <LinkIcon20White className="stroke-primary" />,
  secondary: <LinkIcon20White className="stroke-white" />,
  ghost: <LinkIcon20White className="stroke-gray-900" />,
  link: <LinkIcon20White className="stroke-primary" />,
  transparent: <LinkIcon20White className="stroke-gray-900" />,
  muted: <LinkIcon20White className="stroke-gray-700" />,
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: ({ variant, size, children, ...args }) => (
    <Button variant={variant} size={size} {...args}>
      {iconMapping[variant ?? 'default']}
      {children}
    </Button>
  ),
};

export default meta;
