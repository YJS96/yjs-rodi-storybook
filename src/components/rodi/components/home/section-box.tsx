import React from 'react';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';

export interface SectionBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const SectionBox: React.FC<SectionBoxProps> = ({ children, title, ...props }) => {
  return (
    <div {...props} className="w-full">
      <Text as="h4" size="headline" weight="semibold" className="text-gray-600">
        {title}
      </Text>
      <Flex className="mt-4 rounded-md border border-colors-border py-6">{children}</Flex>
    </div>
  );
};
SectionBox.displayName = 'SectionBox';

export default SectionBox;
