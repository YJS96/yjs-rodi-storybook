import React from 'react';
import { match } from 'ts-pattern';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import CNYFlag from '~/public/images/flag-CNY.svg';
import EURFlag from '~/public/images/flag-EUR.svg';
import GBPFlag from '~/public/images/flag-GBP.svg';
import USDFlag from '~/public/images/flag-USD.svg';
import TrendingDown from '~/public/images/icon-20-trendingDown.svg';
import TrendingUp from '~/public/images/icon-20-trendingUp.svg';

export interface CurrencyBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  currency: 'CNY' | 'USD' | 'GBP' | 'EUR';
  amount: number;
  comparison: number;
}

interface CurrencyInfo {
  flag: JSX.Element;
  countryName: string;
  currencyNameKor: string;
}

interface ComparisonInfo {
  icon: JSX.Element | string;
  color: string;
  comparison: number | string;
}

const CurrencyBox: React.FC<CurrencyBoxProps> = ({ currency, amount, comparison, className }) => {
  const currencyInfo: CurrencyInfo = match<CurrencyBoxProps['currency'], CurrencyInfo>(currency)
    .with('CNY', () => ({ flag: <CNYFlag />, countryName: '중국', currencyNameKor: '위안' }))
    .with('USD', () => ({ flag: <USDFlag />, countryName: '미국', currencyNameKor: '달러' }))
    .with('GBP', () => ({ flag: <GBPFlag />, countryName: '영국', currencyNameKor: '파운드' }))
    .with('EUR', () => ({ flag: <EURFlag />, countryName: '유럽', currencyNameKor: '유로' }))
    .exhaustive();

  const comparisonInfo: ComparisonInfo = match(comparison)
    .when(
      (comp) => comp > 0,
      () => ({
        icon: <TrendingUp />,
        color: 'text-colors-red',
        comparison: `${Math.abs(comparison).toLocaleString()}원`,
      }),
    )
    .when(
      (comp) => comp < 0,
      () => ({
        icon: <TrendingDown />,
        color: 'text-colors-blue',
        comparison: `${Math.abs(comparison).toLocaleString()}원`,
      }),
    )
    .otherwise(() => ({ icon: '', color: '', comparison: '- ' }));

  return (
    <Flex direction="column" className={`w-full px-4 ${className || ''}`}>
      <Flex align="center" gap="0.75">
        {currencyInfo.flag}
        <Flex direction="column">
          <Text as="h5" size="subhead-02" weight="bold">
            {currencyInfo.countryName}
          </Text>
          <Text as="p" size="subhead-00" className="text-gray-500">
            {currency}
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" align="end" className="mt-6">
        <Text as="p" size="subhead-01" weight="bold" className="text-gray-500">
          {currencyInfo.currencyNameKor}
        </Text>
        <Text as="p" size="body-03" weight="bold" className="mt-0.5">
          {amount.toLocaleString()}원
        </Text>
        <Flex align="center" gap="0.25" className="mt-0.5">
          {comparisonInfo.icon}
          <Text as="p" size="subhead-01" weight="semibold" className={comparisonInfo.color}>
            {comparisonInfo.comparison}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
CurrencyBox.displayName = 'CurrencyBox';

export default CurrencyBox;
