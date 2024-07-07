'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import OrderGray from '~/public/images/icon_20_box-gray.svg';
import HomeGray from '~/public/images/icon_20_home-gray.svg';
import RinkGray from '~/public/images/icon_20_market-gray.svg';
import NoticeGray from '~/public/images/icon_20_notice-gray.svg';
import CollectionGray from '~/public/images/icon_20_productEdd-gray.svg';
import RegiGray from '~/public/images/icon_20_productEdit-gray.svg';
import SettingsGray from '~/public/images/icon_20_setting-gray.svg';
import PlanGray from '~/public/images/icon_20_ticket-gray.svg';

import SideBarButton from '../ui/sidebar-button';

type ButtonProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  svgColor: 'fill' | 'stroke';
  path: string;
};

export default function SideBar() {
  const pathname = usePathname();
  // const router = useRouter();

  const buttonTopList: ButtonProps[] = [
    {
      icon: HomeGray,
      name: '홈',
      svgColor: 'fill',
      path: '/admin/home',
    },
    {
      icon: CollectionGray,
      name: '수집상품',
      svgColor: 'stroke',
      path: '/admin/collection',
    },
    {
      icon: RegiGray,
      name: '등록상품',
      svgColor: 'stroke',
      path: '/admin/registration',
    },
    {
      icon: OrderGray,
      name: '주문관리',
      svgColor: 'stroke',
      path: '/admin/order-list',
    },
    {
      icon: RinkGray,
      name: '마켓연동',
      svgColor: 'stroke',
      path: '/admin/market-rink',
    },
  ];

  const buttonBottomList: ButtonProps[] = [
    {
      icon: NoticeGray,
      name: '공지사항',
      svgColor: 'stroke',
      path: '/admin/notice',
    },
    {
      icon: SettingsGray,
      name: '설정',
      svgColor: 'stroke',
      path: '/admin/settings',
    },
    {
      icon: PlanGray,
      name: '요금제',
      svgColor: 'stroke',
      path: '/admin/plan',
    },
  ];

  const buttonList: (ButtonProps | 'separator')[] = [
    ...buttonTopList,
    'separator',
    ...buttonBottomList,
  ];

  return (
    <div className="fixed left-0 top-[60px] z-50 h-full w-[68px] border-e border-colors-border bg-colors-white transition-all duration-200 md:w-[200px]">
      <div className="px-2 py-[10px]">
        <ul className="flex flex-col gap-y-1.5">
          {buttonList.map((button) =>
            button === 'separator' ? (
              <hr key="separator" className="my-2 border-colors-border" />
            ) : (
              <li key={button.name}>
                <Link href={button.path}>
                  <SideBarButton
                    // Storybook 오류로 a태그로 대체
                    // onClick={() => router.push(button.path)}
                    Icon={button.icon}
                    svgColor={button.svgColor}
                    selected={pathname === button.path}
                  >
                    {button.name}
                  </SideBarButton>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
