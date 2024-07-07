'use client';
// import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import CurrencyBox from '@/components/rodi/components/home/currency-box';
import MonthlySummary from '@/components/rodi/components/home/monthly-summary';
import PlanBox from '@/components/rodi/components/home/plan-box';
import QnaBox from '@/components/rodi/components/home/qna-box';
import SectionBox from '@/components/rodi/components/home/section-box';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import RightArrow from '~/public/images/icon-10-right.svg';
// import CheckSel from '~/public/images/icon-20-roundcheck-black.svg';
// import CheckUnsel from '~/public/images/icon-20-roundcheckUnsel.svg';

interface NoticeProps {
  index: number;
  date: string;
  context: string;
}

interface SummaryInfo {
  category: 'sales' | 'buyCount' | 'collectCount' | 'regiCount';
  amount: number;
  comparison: number;
}

interface CurrencyList {
  currency: 'CNY' | 'USD' | 'GBP' | 'EUR';
  amount: number;
  comparison: number;
}

export default function Home() {
  const router = useRouter();

  const date = new Date();
  const month = date.getMonth() + 1;

  // const storesList: string[] = [
  //   '스마트스토어',
  //   '쿠팡',
  //   'G마켓',
  //   '옥션',
  //   '11번가 글로벌',
  //   '11번가 국내',
  //   '롯데온',
  //   '인터파크',
  // ];

  // const [checkedStores, setCheckedStores] = useState(new Set(storesList));
  // const [allChecked, setAllChecked] = useState(true);

  const summaryList: SummaryInfo[] = [
    {
      category: 'sales',
      amount: 1200000,
      comparison: 12,
    },
    {
      category: 'buyCount',
      amount: 1200000,
      comparison: -12,
    },
    {
      category: 'collectCount',
      amount: 1200000,
      comparison: 12,
    },
    {
      category: 'regiCount',
      amount: 1200000,
      comparison: -12,
    },
  ];

  const noticeList: NoticeProps[] = [
    {
      index: 8,
      date: '2024-01-02',
      context: '로디에도 직원 계정 기능이 새로 생겼습니다.',
    },
    {
      index: 7,
      date: '2024-01-01',
      context: '로디에 처음 오셨나요?',
    },
    {
      index: 6,
      date: '2023-12-31',
      context: '무료체험 문의 관련 공지사항입니다.',
    },
    {
      index: 5,
      date: '2023-12-30',
      context: '사진 편집기 오류 관련 에러 해결되었습니다.',
    },
    {
      index: 4,
      date: '2023-12-29',
      context: '로디에 처음 오셨나요?',
    },
  ];

  // const toggleStoreCheck = (store: string) => {
  //   setCheckedStores((prev) => {
  //     const newChecked = new Set(prev);
  //     if (newChecked.has(store)) {
  //       newChecked.delete(store);
  //     } else {
  //       newChecked.add(store);
  //     }
  //     return newChecked;
  //   });
  //   console.log(checkedStores);
  // };

  // const toggleAllCheck = () => {
  //   if (allChecked) {
  //     setCheckedStores(new Set());
  //     setAllChecked(false);
  //   } else {
  //     setCheckedStores(new Set(storesList));
  //     setAllChecked(true);
  //   }
  // };

  const currencyList: CurrencyList[] = [
    {
      currency: 'CNY',
      amount: 140,
      comparison: 12,
    },
    {
      currency: 'USD',
      amount: 1320,
      comparison: 0,
    },
    {
      currency: 'GBP',
      amount: 1400,
      comparison: -3,
    },
    {
      currency: 'EUR',
      amount: 1320,
      comparison: 0,
    },
  ];

  return (
    <>
      <Text as="h3" weight="bold" size="display-01">
        Ian님의 {month}월 현황
      </Text>

      <Flex justify="between" className="mt-8">
        <Text as="h4" size="headline" weight="semibold" className="text-gray-600">
          매출처 선택
        </Text>
        <div>체크박스 부분</div>
      </Flex>
      <Flex gap="1" className="mt-4 rounded-lg bg-gray-200 p-6">
        {summaryList.map((summary, key) => (
          <MonthlySummary
            category={summary.category}
            amount={summary.amount}
            comparison={summary.comparison}
            key={key}
          />
        ))}
      </Flex>

      <Flex gap="1.5" className="mt-8 grid-cols-2">
        <SectionBox title="RODI Plan">
          <Flex className="w-full grid-cols-3">
            <PlanBox category="plan" planType={true} due="2024.12.31" />
            <Flex className="border-e border-colors-border"></Flex>
            <PlanBox
              category="auth"
              isAuth={true}
              businessRegiNum="123-1234-5678"
              memberType="대표계정"
            />
          </Flex>
        </SectionBox>
        <SectionBox title="현재 환율" className="grid-cols-4">
          {currencyList.map((currency, key) => (
            <CurrencyBox
              key={key}
              currency={currency.currency}
              amount={currency.amount}
              comparison={currency.comparison}
              className={key < 3 ? 'border-e border-colors-border' : ''}
            />
          ))}
        </SectionBox>
      </Flex>

      <Flex gap="1.5" className="mt-8 grid-cols-2">
        <Flex direction="column" className="w-full">
          <Flex justify="between" align="center">
            <Text as="h4" size="headline" weight="semibold" className="text-gray-600">
              RODI 공지사항
            </Text>
            <Flex
              gap="0.25"
              align="center"
              onClick={() => router.push('/admin/notice')}
              className="cursor-pointer hover:underline"
            >
              <Text as="p" size="subhead-02" weight="semibold">
                더보기
              </Text>
              <RightArrow />
            </Flex>
          </Flex>
          <Flex direction="column" className="mt-4 border-t border-colors-border">
            {noticeList.map((notice, key) => (
              <Flex
                justify="between"
                align="center"
                className="cursor-pointer border-b border-colors-border px-2.5 py-3 hover:bg-gray-200"
                key={key}
                onClick={() => router.push(`/notice/${notice.index}`)}
              >
                <Text as="p" size="subhead-02" weight="bold">
                  {notice.context}
                </Text>
                <Text as="p" size="subhead-01" className="text-gray-500">
                  {notice.date}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" className="w-full">
          <Text as="h4" size="headline" weight="semibold" className="text-gray-600">
            Q&A 및 고객센터
          </Text>
          <Flex gap="1" className="mt-4 grid-cols-3">
            <QnaBox qnaType="guide" />
            <QnaBox qnaType="qna" />
            <QnaBox qnaType="helpCenter" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
