import React from 'react';

import LogoGray from '~/public/images/logo_vertical_gray.svg';

import { Text } from '../ui/text';

export default function Footer() {
  return (
    <div className="flex w-full flex-col bg-colors-gray-200 py-[30px] ps-4 transition-all duration-200 md:flex-row md:items-center md:py-[40px] md:ps-[120px]">
      <LogoGray className="ms-[-11.5px] scale-[0.72] md:ms-0 md:scale-100" />
      <div className="mt-[22px] flex flex-col gap-y-3 md:ms-20 md:mt-0 md:gap-y-5">
        <div className="flex gap-1.5 text-colors-gray-900">
          <button>
            <Text as="p" size={'body-01'} weight={'semibold'}>
              일반 이용약관
            </Text>
          </button>
          <Text asChild size={'body-01'} weight={'semibold'}>
            <span>|</span>
          </Text>
          <button>
            <Text as="p" size={'body-01'} weight={'semibold'}>
              개인정보 처리방침
            </Text>
          </button>
        </div>
        <Text as="p" size={'subhead-01'} weight={'regular'} className="text-colors-gray-700">
          상호명 : RODI
          <br /> 대표자 : 김정란 | 사업자번호 : 123-33-55567
          <br />
          주소 : 서울시 관악구 행복로 110
          <br />
          통신판매업신고번호 : 2023-서울관악-1234
          <br />
          대표전화 : 070-2341-0344 | 대표 메일 : contact@rodi.co.kr
        </Text>
      </div>
    </div>
  );
}
