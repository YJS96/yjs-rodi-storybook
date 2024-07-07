import { useRouter } from 'next/navigation';
import React, { ReactElement } from 'react';
import { match } from 'ts-pattern';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import RightArrow from '~/public/images/icon-10-right.svg';
import Shield from '~/public/images/shield-fill.svg';
import Unshield from '~/public/images/unshield-fill.svg';

type BaseProps = {
  title: string;
  subtitle: string;
  subtitleColor: string;
  description: string | ReactElement<HTMLDivElement>;
  linkText: string;
  showShield: boolean;
  routerPath: string;
};

type PlanProps = {
  category: 'plan';
  planType: boolean;
  due: string;
};

type AuthProps = {
  category: 'auth';
  isAuth: boolean;
  businessRegiNum: string;
  memberType: string;
};

type Props = PlanProps | AuthProps;

function createPlanBoxProps(props: Props): BaseProps {
  return match(props)
    .with({ category: 'plan' }, (plan) => ({
      title: '나의 요금제',
      subtitle: plan.planType ? 'Pro Plan' : 'Plan 없음',
      subtitleColor: plan.planType ? 'text-green-500' : 'text-red-500',
      description: `26일 남음 (${plan.due})`,
      linkText: '요금제 결제하러 가기',
      showShield: false,
      routerPath: '/admin/plan',
    }))
    .with({ category: 'auth' }, (auth) => ({
      title: '사업자 인증',
      subtitle: auth.isAuth ? '인증' : '미인증',
      subtitleColor: auth.isAuth ? 'text-blue-500' : 'text-red-500',
      description: auth.isAuth ? `${auth.businessRegiNum} | ${auth.memberType}` : <div>&nbsp;</div>,
      linkText: '직원 계정 추가하러 가기',
      showShield: auth.isAuth,
      routerPath: '/admin/settings',
    }))
    .exhaustive();
}

export default function PlanBox(props: Props) {
  const { title, subtitle, subtitleColor, description, linkText, showShield, routerPath } =
    createPlanBoxProps(props);

  const router = useRouter();

  const toRouter = () => {
    router.push(routerPath);
  };

  return (
    <Flex direction="column" className="w-full px-6">
      <Text as="h5" size="subhead-02" weight="bold" className="text-gray-600">
        {title}
      </Text>
      <Flex align="center" gap="0.25">
        {props.category === 'auth' ? (
          showShield ? (
            <Shield className="mt-1" />
          ) : (
            <Unshield className="mt-1" />
          )
        ) : (
          ''
        )}
        <Text as="p" size="display-01" weight="bold" className={`mt-1.5 ${subtitleColor}`}>
          {subtitle}
        </Text>
      </Flex>
      <Flex align="center" className="mt-1">
        <Text as="p" size="subhead-01" weight="semibold" className="text-gray-500">
          {description}
        </Text>
      </Flex>
      <Flex
        align="center"
        gap="0.25"
        className="mt-5 cursor-pointer hover:underline"
        onClick={() => toRouter()}
      >
        <Text as="p" size="subhead-02" weight="semibold">
          {linkText}
        </Text>
        <RightArrow />
      </Flex>
    </Flex>
  );
}
