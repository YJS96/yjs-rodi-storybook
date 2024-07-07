import React from 'react';

import EmptyIcon from '~/public/images/empty_data.svg';

import { Text } from './text';


interface EmpytProps {
  type: 'long' | 'short';
}

export default function Empty({ type }: EmpytProps) {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <EmptyIcon />
        {type === 'long' && (
          <Text
            as="p"
            size={'body-03'}
            weight={'bold'}
            className="mb-1 mt-6 text-center text-colors-gray-500"
          >
            수집된 상품이 없습니다
          </Text>
        )}
        <Text
          as="p"
          size={'body-02'}
          weight={'medium'}
          className="mt-2 text-center text-colors-gray-400"
        >
          크롬 익스텐션, URL 수집, 엑셀 수집 등을 이용해서
          <br />
          원하는 상품을 수집해보세요!
        </Text>
      </div>
    </>
  );
}
