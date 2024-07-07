import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

import { Toaster } from '../ui/toaster';

interface ToastDemoProps {
  icon?: 'success' | 'error' | null;
  title: string;
  description: string;
}

const ToastDemo: React.FC<ToastDemoProps> = ({ icon, title, description }) => {
  const { toast } = useToast();

  return (
    <Button
      variant="secondary"
      onClick={() => {
        toast({
          title,
          icon: icon,
          description: description,
        });
      }}
    >
      Show Toast
    </Button>
  );
};

const meta: Meta<typeof ToastDemo> = {
  title: 'Toast',
  component: ToastDemo,
  args: {
    icon: 'success',
    title: 'Success!',
    description: 'This is a success message.',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['success', 'error', null],
    },
  },
};

export const Default: StoryObj<typeof ToastDemo> = {
  render: (args) => (
    <>
      <Toaster />
      <ToastDemo {...args} />
    </>
  ),
};

export default meta;
