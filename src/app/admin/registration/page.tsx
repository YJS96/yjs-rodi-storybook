'use client';
import Image from 'next/image';
import React from 'react';

import RegiMarket from '@/components/Buttons/RegiMarket';
import ColorChip from '@/components/ColorChip/ColorChip';
import Pen from '~/public/images/icon-16-pen.svg';
import PrevPage from '~/public/images/icon-16-right.svg';
import Delete from '~/public/images/icon-20-delete.svg';
import CheckUnsel from '~/public/images/icon-20-roundcheckUnsel.svg';
import Badge from '~/public/images/icon-color-badge.svg';
import Rocket from '~/public/images/icon-color-rocket.svg';
import Taobao from '~/public/images/taobao_logo.svg';

export default function Registration() {
  // const [colorChip, setColorChip] = useState<String>('red')
  // const colorChip = "red";

  const today = new Date();
  const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  const getDays = (firstDay: Date) => {
    const calendarDays = [];
    const year = firstDay.getFullYear();
    const month = firstDay.getMonth();

    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay.getDay(); i++) {
      calendarDays.push(0);
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
      calendarDays.push(i);
    }

    return calendarDays;
  };

  return (
    <>
      <div className="w-full">
        <div className="flex w-full">
          <div className="me-6 flex w-1/6 flex-col justify-around rounded-xl border border-color-border px-4 py-5 text-center font-semibold">
            <div>
              <div className="text-sm text-color-main">오늘 등록한 상품</div>
              <div>30개</div>
            </div>
            <div className="my-0.5 border-b border-color-border"></div>
            <div>
              <div className="text-sm text-color-main">이번달 등록한 상품</div>
              <div>30개</div>
            </div>
            <div className="my-0.5 border-b border-color-border"></div>
            <div>
              <div className="text-sm text-color-main">총 등록한 상품</div>
              <div>30개</div>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 items-start rounded-xl border border-color-border py-6">
            <div className="h-full border-e border-color-border px-6">
              <div className="mb-2.5 flex items-center justify-between">
                <div className="flex items-center text-lg font-semibold">
                  <Rocket />
                  <span className="ms-1.5">나의 목표</span>
                </div>
                <div className="flex items-center rounded bg-gray-200 px-2.5 py-2 text-xs font-medium text-gray-500">
                  <div className="flex items-center">
                    <span className="me-2.5">하루</span>
                    <span className="font-medium text-gray-900">30</span>
                    <span>&nbsp;개</span>
                  </div>
                  <div className="mx-2.5 h-3 w-[1px] border border-color-border"></div>
                  <div>나의컬러</div>
                  <ColorChip />
                </div>
              </div>
              <div className="grid w-full grid-cols-3 gap-x-3 text-gray-500">
                <div className="text-xs font-semibold">
                  <div className="mb-2">{lastMonth.getMonth() + 1}월</div>
                  <div className="grid grid-cols-7">
                    {getDays(lastMonth).map((day, index) => (
                      <React.Fragment key={index}>
                        <div
                          className={`calendar-date ${
                            day !== 0 ? 'bg-chip-red-1' : 'bg-color-white'
                          } text-color-white`}
                        >
                          {day !== 0 ? day : ''}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="text-xs font-semibold">
                  <div className="mb-2">{thisMonth.getMonth() + 1}월</div>
                  <div className="grid grid-cols-7">
                    {getDays(thisMonth).map((day, index) => (
                      <React.Fragment key={index}>
                        <div
                          className={`calendar-date ${
                            day !== 0 ? 'bg-chip-red-1' : 'bg-color-white'
                          } text-color-white`}
                        >
                          {day !== 0 ? day : ''}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="text-xs font-semibold">
                  <div className="mb-2">{nextMonth.getMonth() + 1}월</div>
                  <div className="grid grid-cols-7">
                    {getDays(nextMonth).map((day, index) => (
                      <React.Fragment key={index}>
                        <div
                          className={`calendar-date ${
                            day !== 0 ? 'bg-chip-red-1' : 'bg-color-white'
                          } text-color-white`}
                        >
                          {day !== 0 ? day : ''}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col px-6">
              <div className="mb-2.5 flex items-center text-lg font-semibold">
                <Badge />
                <span className="ms-2">나의 순위</span>
              </div>
              <div className="grid h-full grid-cols-2 gap-x-4">
                <div className="flex flex-col rounded-lg bg-gray-200 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold">
                    <span className="text-gray-600">오늘 등록한 상품 수</span>
                    <span>상위 43%</span>
                  </div>
                  <div className="grid size-full grid-rows-2 rounded-lg bg-color-white px-4 text-[13px] font-medium">
                    <div className="flex items-center border-b  border-color-border py-2">
                      <Image
                        className="me-2 size-5"
                        src="/images/ranker_1.png"
                        width="72"
                        height="72"
                        alt="ranker_1"
                      />
                      <span>Ian***3</span>
                    </div>
                    <div className="flex items-center py-2">
                      <Image
                        className="me-2 size-5"
                        src="/images/ranker_2.png"
                        width="72"
                        height="72"
                        alt="ranker_1"
                      />
                      <span>Ian***3</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg bg-gray-200 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold">
                    <span className="text-gray-600">이번달 등록한 상품 수</span>
                    <span>상위 13%</span>
                  </div>
                  <div className="grid size-full grid-rows-2 rounded-lg bg-color-white px-4 text-[13px] font-medium">
                    <div className="flex items-center border-b  border-color-border py-2">
                      <Image
                        className="me-2 size-5"
                        src="/images/ranker_1.png"
                        width="72"
                        height="72"
                        alt="ranker_1"
                      />
                      <span>Ian***3</span>
                    </div>
                    <div className="flex items-center py-2">
                      <Image
                        className="me-2 size-5"
                        src="/images/ranker_2.png"
                        width="72"
                        height="72"
                        alt="ranker_1"
                      />
                      <span>Ian***3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between pb-3 pt-9">
          <span className="header-text">등록상품</span>
        </div>

        <div className="mt-4 flex h-14 w-full select-none items-center justify-between rounded-lg bg-gray-300 py-[9px] pe-[10px] ps-5">
          <div className="flex">
            <CheckUnsel />
            <span className="ms-[6px] text-sm font-medium text-gray-600">16개 선택</span>
          </div>
          <div className="flex">
            <div className="px6-button transition-200 rounded bg-color-white text-gray-700 hover:bg-gray-100">
              <Delete />
              <span className="ms-1">삭제</span>
            </div>
          </div>
        </div>

        <table className="mt-4 w-full table-fixed border-collapse border-spacing-0">
          <thead className="h-10 border-y border-color-border text-center text-sm text-gray-500">
            <tr className="">
              <th className="w-5"></th>
              <th className="w-14 ps-2.5"></th>
              <th className="ps-8 text-left font-medium">상품명</th>
              <th className="w-[90px] ps-8 font-medium">수집링크</th>
              <th className="w-[365px] ps-8 font-medium">오픈마켓 링크</th>
              <th className="w-[100px] ps-8 font-medium">메모</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            <tr className="h-16 border-b border-color-border">
              <td className="w-5 text-center">
                <div className="flex select-none">
                  <input className="appearance-none" type="checkbox" id="all" />
                  <label className="items-center" htmlFor="all">
                    <CheckUnsel />
                  </label>
                </div>
              </td>
              <td className="ps-2.5">
                <Image
                  className="size-[46px] overflow-hidden rounded"
                  src="/images/eximg_01.png"
                  width="46"
                  height="46"
                  alt="ex"
                />
              </td>
              <td className="ps-8">아이스 트레이 Type A</td>
              <td className="ps-8">
                <a className="flex w-full justify-center">
                  <Taobao className="size-8" />
                </a>
              </td>
              <td className="ps-8">
                <div className="mt-2 flex flex-wrap justify-center">
                  <RegiMarket store={'스마트스토어'} status={'ready'} />
                  <RegiMarket store={'스마트스토어'} status={'ready'} />
                  <RegiMarket store={'쿠팡'} status={'error'} />
                  <RegiMarket store={'쿠팡'} status={'error'} />
                  <RegiMarket store={'11번가 글로벌'} status={'pending'} />
                </div>
              </td>
              <td className="ps-8">
                <div className="flex items-center">
                  <button className="flex h-7 items-center rounded-full bg-gray-300 px-3 py-2 text-xs">
                    <Pen />
                    <span className="ms-1">메모</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr className="h-16 border-b border-color-border">
              <td className="w-5 text-center">
                <div className="flex select-none">
                  <input className="appearance-none" type="checkbox" id="all" />
                  <label className="items-center" htmlFor="all">
                    <CheckUnsel />
                  </label>
                </div>
              </td>
              <td className="ps-2.5">
                <Image
                  className="size-[46px] overflow-hidden rounded"
                  src="/images/eximg_01.png"
                  width="46"
                  height="46"
                  alt="ex"
                />
              </td>
              <td className="ps-8">아이스 트레이 Type A</td>
              <td className="ps-8">
                <a className="flex w-full justify-center">
                  <Taobao className="size-8" />
                </a>
              </td>
              <td className="ps-8">
                <div className="mt-2 flex flex-wrap justify-center">
                  <RegiMarket store={'스마트스토어'} status={'ready'} />
                  <RegiMarket store={'스마트스토어'} status={'ready'} />
                  <RegiMarket store={'쿠팡'} status={'error'} />
                  <RegiMarket store={'쿠팡'} status={'error'} />
                  <RegiMarket store={'11번가 글로벌'} status={'pending'} />
                </div>
              </td>
              <td className="ps-8">
                <div className="flex items-center">
                  <button className="round-small-button">
                    <Pen />
                    <span className="ms-1">메모</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-center pt-10">
          <button className="page-button">
            <PrevPage />
          </button>
          <button className="page-button transition-200 bg-color-bg-green10 text-sm font-normal text-color-main ">
            1
          </button>
          <button className="page-button transition-200 text-sm font-normal text-gray-500">
            2
          </button>
          <button className="page-button rotate-180">
            <PrevPage />
          </button>
        </div>
      </div>
    </>
  );
}
