import type { Meta, StoryObj } from '@storybook/react';

import Footer from '../layout/footer';

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
};

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => <Footer></Footer>,
};

export default meta;
