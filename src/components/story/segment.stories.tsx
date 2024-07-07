import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Segment, SegmentContent, SegmentItem, SegmentLink } from '@/components/ui/segment';

const SegmentExample: React.FC<{ items: string[] }> = ({ items }) => {
  let [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Segment>
      <SegmentContent>
        {items.map((item, index) => (
          <SegmentItem key={index}>
            <SegmentLink
              isActive={currentIndex === index}
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              {item}
            </SegmentLink>
          </SegmentItem>
        ))}
      </SegmentContent>
    </Segment>
  );
};

const meta: Meta<typeof SegmentExample> = {
  title: 'Segment',
  component: SegmentExample,
  args: {
    items: ['Label1', 'Label2', 'Label3'],
  },
};

type Story = StoryObj<typeof SegmentExample>;

export const Default: Story = {
  render: (args) => <SegmentExample {...args} />,
};

export default meta;
