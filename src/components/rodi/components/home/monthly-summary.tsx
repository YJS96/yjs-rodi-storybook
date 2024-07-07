import React from 'react';
import { match } from 'ts-pattern';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import BuyIcon from '~/public/images/icon-20-box-blue.svg';
import SalesIcon from '~/public/images/icon-20-payment.svg';
import CollectIcon from '~/public/images/icon-20-productEdd-purple.svg';
import RegiIcon from '~/public/images/icon-20-productEdit-yellow.svg';
import TrendingDown from '~/public/images/icon-20-trendingDown.svg';
import TrendingUp from '~/public/images/icon-20-trendingUp.svg';

type CategoryProps = {
  category: 'sales' | 'buyCount' | 'collectCount' | 'regiCount';
  amount: number;
  comparison: number;
};

interface CategoryInfo {
  title: string;
  icon: JSX.Element;
  bgColor: string;
}

interface ComparisonInfo {
  icon: JSX.Element;
  color: string;
}

export default function MonthlySummary({ category, amount, comparison }: CategoryProps) {
  const date = new Date();
  const prevMonth = date.getMonth();

  const categoryInfo: CategoryInfo = match<CategoryProps['category'], CategoryInfo>(category)
    .with('sales', () => ({ title: '이번달 매출', icon: <SalesIcon />, bgColor: 'bg-colors-main' }))
    .with('buyCount', () => ({
      title: '이번달 구매 건수',
      icon: <BuyIcon />,
      bgColor: 'bg-colors-blue',
    }))
    .with('collectCount', () => ({
      title: '이번달 상품 수집 수',
      icon: <CollectIcon />,
      bgColor: 'bg-colors-violet',
    }))
    .with('regiCount', () => ({
      title: '이번달 상품 등록 수',
      icon: <RegiIcon />,
      bgColor: 'bg-colors-yellow',
    }))
    .exhaustive();

  const comparisonInfo: ComparisonInfo = match(comparison)
    .when(
      (comp) => comp >= 0,
      () => ({
        icon: <TrendingUp />,
        color: 'text-colors-red',
      }),
    )
    .otherwise(() => ({
      icon: <TrendingDown />,
      color: 'text-colors-blue',
    }));

  return (
    <Flex direction="column" className="w-1/4 bg-white p-5">
      <Flex align="center" gap="0.5">
        <Flex
          justify="center"
          align="center"
          className={`size-8 rounded-full ${categoryInfo.bgColor} bg-opacity-10`}
        >
          {categoryInfo.icon}
        </Flex>
        <Text as="h4" size="subhead-02" weight="semibold" className="text-gray-800">
          {categoryInfo.title}
        </Text>
      </Flex>
      <Text as="p" size="display-01" weight="bold" className="text-right">
        {amount.toLocaleString()}원
      </Text>
      <Flex justify="end" align="center" className="mt-1" gap="0.25">
        {comparisonInfo.icon}
        <Text as="p" size="subhead-01" weight="semibold" className={comparisonInfo.color}>
          {prevMonth}월 대비 {Math.abs(comparison)}%
        </Text>
      </Flex>
    </Flex>
  );
}
