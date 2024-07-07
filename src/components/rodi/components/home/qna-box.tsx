import Image from 'next/image';
import React from 'react';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';

type QnaProps = {
  qnaType: 'guide' | 'qna' | 'helpCenter';
};

export default function QnaBox({ qnaType }: QnaProps) {
  const qnaList = {
    guide: {
      color: 'main',
      description: '로디에 처음 오셨나요?',
      title: '사용가이드',
      svgName: 'illu_list',
    },
    qna: {
      color: 'blue',
      description: '궁금한 점이 있으신가요?',
      title: 'Q&A',
      svgName: 'illu_qa',
    },
    helpCenter: {
      color: 'yellow',
      description: '상담이 필요하신가요?',
      title: '고객센터',
      svgName: 'illu_cs',
    },
  };

  const { color, description, title, svgName } = qnaList[qnaType];

  return (
    <Flex
      direction="column"
      className={`group relative w-full rounded-lg bg-colors-${color} bg-opacity-10 p-6`}
    >
      <Text as="p" size="subhead-01" weight="semibold" className="text-gray-800">
        {description}
      </Text>
      <Text as="p" size="headline" weight="bold" className={`mt-0.5 group-hover:text-${color}`}>
        RODI
      </Text>
      <Text as="p" size="headline" weight="bold" className="mb-3 mt-0.5">
        {title}
      </Text>
      <Flex justify="end" className="mt-24">
        <Image
          className="absolute bottom-6 right-6 size-[52px] transition-all duration-200 group-hover:size-[60px]"
          src={`/images/${svgName}.svg`}
          width="52"
          height="52"
          alt="list"
        />
      </Flex>
    </Flex>
  );
}
