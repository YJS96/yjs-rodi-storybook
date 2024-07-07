'use client';
import React from 'react';

import OrderColor from '~/public/images/icon_20_box-color.svg';
import OrderGray from '~/public/images/icon_20_box-gray.svg';
import HomeColor from '~/public/images/icon_20_home-color.svg';
import HomeGray from '~/public/images/icon_20_home-gray.svg';
import RinkColor from '~/public/images/icon_20_market-color.svg';
import RinkGray from '~/public/images/icon_20_market-gray.svg';
import NoticeColor from '~/public/images/icon_20_notice-color.svg';
import NoticeGray from '~/public/images/icon_20_notice-gray.svg';
import CollectionColor from '~/public/images/icon_20_productEdd-color.svg';
import CollectionGray from '~/public/images/icon_20_productEdd-gray.svg';
import RegiColor from '~/public/images/icon_20_productEdit-color.svg';
import RegiGray from '~/public/images/icon_20_productEdit-gray.svg';
import SettingsColor from '~/public/images/icon_20_setting-color.svg';
import SettingsGray from '~/public/images/icon_20_setting-gray.svg';
import PlanColor from '~/public/images/icon_20_ticket-color.svg';
import PlanGray from '~/public/images/icon_20_ticket-gray.svg';

interface SidebarProps {
  currentTab: String;
}

export default function SideBar({ currentTab }: SidebarProps) {
  return (
    <>
      <div className="fixed left-0 top-[60px] z-50 h-full w-[200px] border-e border-color-border bg-color-white">
        <div className="overflow-y-auto px-2 py-[10px]">
          <ul className="space-y-[5px]">
            {/* 홈 */}
            <a href="/admin/home">
              <li
                className={
                  currentTab === '/admin/home'
                    ? 'sidebar-button sidebar-active'
                    : 'sidebar-button group'
                }
              >
                <HomeGray />
                <HomeColor
                  className={
                    currentTab === '/admin/home' ? 'sidebar-icon-color' : 'sidebar-icon-gray'
                  }
                />
                <span className="ps-2.5">홈</span>
              </li>
            </a>
            {/* 수집상품 */}
            <a href="/admin/collection">
              <li
                className={
                  currentTab === '/admin/collection'
                    ? 'sidebar-button sidebar-active'
                    : 'sidebar-button group'
                }
              >
                <CollectionGray />
                <CollectionColor
                  className={
                    currentTab === '/admin/collection' ? 'sidebar-icon-color' : 'sidebar-icon-gray'
                  }
                />
                <span className="ps-2.5">수집상품</span>
              </li>
            </a>
            {/* 등록상품 */}
            <a href="/admin/registration">
              <li
                className={
                  currentTab === '/admin/registration'
                    ? 'sidebar-button sidebar-active'
                    : 'sidebar-button group'
                }
              >
                <RegiGray />
                <RegiColor
                  className={
                    currentTab === '/admin/registration'
                      ? 'sidebar-icon-color'
                      : 'sidebar-icon-gray'
                  }
                />
                <span className="ps-2.5">등록상품</span>
              </li>
            </a>
            {/* 주문관리 */}
            <a href="/admin/order-list">
              <li
                className={
                  currentTab === '/admin/order-list'
                    ? 'sidebar-button sidebar-active'
                    : 'sidebar-button group'
                }
              >
                <OrderGray />
                <OrderColor
                  className={
                    currentTab === '/admin/order-list' ? 'sidebar-icon-color' : 'sidebar-icon-gray'
                  }
                />
                <span className="ps-2.5">주문관리</span>
              </li>
            </a>
            {/* 마켓연동 */}
            <a href="/admin/market-rink">
              <li
                className={
                  currentTab === '/admin/market-rink'
                    ? 'sidebar-button sidebar-active'
                    : 'sidebar-button group'
                }
              >
                <RinkGray />
                <RinkColor
                  className={
                    currentTab === '/admin/market-rink' ? 'sidebar-icon-color' : 'sidebar-icon-gray'
                  }
                />
                <span className="ps-2.5">마켓연동</span>
              </li>
            </a>
          </ul>
          <hr className="my-4 border-color-border" />
          <ul className="space-y-2">
            {/* 공지사항 */}
            <a href="/admin/notice">
              <li
                className={
                  currentTab === '/admin/notice'
                    ? 'sidebar-button sidebar-active'
                    : 'sidebar-button group'
                }
              >
                <NoticeGray />
                <NoticeColor
                  className={
                    currentTab === '/admin/notice' ? 'sidebar-icon-color' : 'sidebar-icon-gray'
                  }
                />
                <span className="ps-2.5">공지사항</span>
              </li>
            </a>
            {/* 설정 */}
            <a href="/admin/settings">
              <li
                className={
                  currentTab === '/admin/settings'
                    ? 'sidebar-button sidebar-active'
                    : 'sidebar-button group'
                }
              >
                <SettingsGray />
                <SettingsColor
                  className={
                    currentTab === '/admin/settings' ? 'sidebar-icon-color' : 'sidebar-icon-gray'
                  }
                />
                <span className="ps-2.5">설정</span>
              </li>
            </a>
            {/* 요금제 */}
            <a href="/admin/plan">
              <li
                className={
                  currentTab === '/admin/plan'
                    ? 'sidebar-button sidebar-active'
                    : 'sidebar-button group'
                }
              >
                <PlanGray />
                <PlanColor
                  className={
                    currentTab === '/admin/plan' ? 'sidebar-icon-color' : 'sidebar-icon-gray'
                  }
                />
                <span className="ps-2.5">요금제</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
