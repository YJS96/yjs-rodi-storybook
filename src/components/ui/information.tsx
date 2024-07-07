import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import InformationIcon from 'public/images/icon-16-information-gray.svg';

type InformationProps = {
  description: string;
} & React.ComponentProps<'span'>;

const Information = ({ description, className, ...props }: InformationProps) => {
  return (
    <Flex align="center" gap="0.25">
      <InformationIcon />
      <Text as="p" size="caption" weight="regular" className="text-colors-gray-500">
        {description}
      </Text>
    </Flex>
  );
};

export { Information };
