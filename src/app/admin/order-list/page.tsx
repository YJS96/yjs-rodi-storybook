'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import ExcelBlack from '~/public/images/icon-16-excel-black.svg';
import RoundGray from '~/public/images/icon-16-information-gray.svg';
import RoundRed from '~/public/images/icon-16-information-red.svg';
import PlusWhite from '~/public/images/icon-16-plus-white.svg';
import ReplayBlack from '~/public/images/icon-16-replay-black.svg';
import TruckBlack from '~/public/images/icon-16-truck-black.svg';
import DownloadWhite from '~/public/images/icon-20-download-white.svg';
import RoundCheck from '~/public/images/icon-roundcheck-main.svg';

interface SalesProps {
  img: string;
  name: string;
  revenue: number;
}

export default function OrderList() {
  const [currentTab, setCurrentTab] = useState<Number>(1);
  const [currentDuration, setCurrentDuration] = useState<Number>(0);
  const [currentMarket, setCurrentMarket] = useState<Number>(0);

  const tabList = [
    '결제완료',
    '상품 준비중',
    '배송중',
    '배송완료',
    '취소요청',
    '반품요청',
    '교환요청',
  ];

  const notiList = [0, 3, 0, 5, 0, 0, 0];
  const durationList = ['오늘', '어제', '이번주', '이번달'];
  const marketList = ['전체', ' 스마트스토어', '쿠팡', 'G마켓', '옥션'];
  const salesList: SalesProps[] = [
    {
      img: 'naver',
      name: '스마트스토어',
      revenue: 1932000,
    },
    {
      img: 'coupang',
      name: '쿠팡',
      revenue: 200000,
    },
    {
      img: '_gmarket',
      name: 'G마켓',
      revenue: 0,
    },
    {
      img: 'auction',
      name: '옥션',
      revenue: 90700,
    },
    {
      img: '11st',
      name: '11번가 글로벌',
      revenue: 120000,
    },
    {
      img: '11st',
      name: '11번가 국내',
      revenue: 48000,
    },
    {
      img: 'INTERPARK',
      name: '인터파크',
      revenue: 76000,
    },
    {
      img: 'lotteon',
      name: '롯데온',
      revenue: 170000,
    },
  ];

  // const itemList = [
  //   {
  //     market: "naver",
  //     orderNum: "15000179728147",
  //     orderTime: "23/08/15 22:22",
  //     name: "아치형 이동식 미니 우드칸막이 중간 파티션 1200",
  //     option: "그린/M",
  //     count: 1,
  //     listPrice: 3467000,
  //     ogPrice: 1200000,
  //     prdctMargin: 123000,
  //   }
  // ]

  const getTime = () => {
    var today = new Date();
    today.setHours(today.getHours() + 9);
    return today
      .toISOString()
      .replace('-', '/')
      .replace('-', '/')
      .replace('T', ' ')
      .substring(2, 16);
  };

  const numberComma = (num: Number) => {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <div className="header-text">주문관리</div>
      <div className="gray-rounded mt-5 p-5">
        <div className="flex items-center">
          <span className="sub-header me-4">주문관리 연동 상태</span>
          <div className="flex items-center text-xs font-medium text-gray-500">
            <div className="me-3 flex items-center">
              <span className="me-1">스마트스토어</span>
              <RoundCheck />
            </div>
            <div className="me-3 flex items-center">
              <span className="me-1">쿠팡</span>
              <RoundCheck />
            </div>
            <div className="flex items-center">
              <span className="me-1">ESM 2.0 (G마켓/옥션)</span>
              <RoundRed />
            </div>
          </div>
        </div>
        <div className="mx-5 h-6 border-e border-color-border"></div>
        <span className="sub-header me-4">미사용 마켓</span>
        <div className="flex items-center text-xs font-medium text-gray-500">
          <div className="me-3 flex items-center">
            <span className="me-1">롯데온</span>
            <RoundGray />
          </div>
          <div className="me-3 flex items-center">
            <span className="me-1">인터파크</span>
            <RoundGray />
          </div>
        </div>
      </div>
      <div className="relative mb-7 mt-5 flex w-full shadow-tab">
        <div className="absolute -left-6 w-6 py-3 shadow-tab">&nbsp;</div>
        <div className="absolute -right-6 w-6 py-3 shadow-tab">&nbsp;</div>
        {tabList.map((tab, key) => (
          <React.Fragment key={key}>
            <button
              className={key === currentTab ? 'home-tab-selected' : 'home-tab'}
              onClick={() => {
                setCurrentTab(key);
              }}
            >
              {tab}
              {notiList[key] !== 0 && (
                <div className="ms-1 flex size-4 items-center justify-center rounded-full bg-color-red text-[10px] text-color-white">
                  {notiList[key]}
                </div>
              )}
            </button>
          </React.Fragment>
        ))}
      </div>
      {currentTab === 1 && (
        <>
          <div className="flex w-full">
            <div className="me-6 grid w-full grid-cols-3 rounded-xl border border-color-border py-4">
              <div className="group relative flex cursor-pointer items-center justify-between border-e border-color-border px-6">
                <span className="font-semibold text-color-main">8월 매출</span>
                <div className="flex flex-col items-end">
                  <span className="mb-1 text-xl font-bold">2,605,000원</span>
                  <span className="text-xs text-gray-500">지난 달 1,000,000원</span>
                </div>
                <div className="w-min-[340px] absolute top-14 hidden w-11/12 rounded-lg bg-color-white p-5 drop-shadow-popup group-hover:block">
                  <div className="flex w-full flex-wrap">
                    {salesList.map((sale, key) => (
                      <React.Fragment key={key}>
                        <div className="my-1.5 flex w-1/2 items-center">
                          <Image src={`/images/${sale.img}.svg`} width="32" height="32" alt="alt" />
                          <div className="ms-2.5">
                            <div className="text-xs text-gray-600">{sale.name}</div>
                            <div className="text-sm font-semibold">
                              {numberComma(sale.revenue)}원
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="group relative flex cursor-pointer items-center justify-between border-e border-color-border px-6">
                <span className="font-semibold text-color-main">8월 매입</span>
                <div className="flex flex-col items-end">
                  <span className="mb-1 text-xl font-bold">2,605,000원</span>
                  <span className="text-xs text-gray-500">지난 달 1,000,000원</span>
                </div>
                <div className="w-min-[340px] absolute top-14 hidden w-11/12 rounded-lg bg-color-white p-5 drop-shadow-popup group-hover:block">
                  <div className="mt-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-600">배송대행지 비용</span>
                    <span>3,453,000원</span>
                  </div>
                  <div className="my-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-600">오픈마켓 수수료</span>
                    <span>144,000원</span>
                  </div>
                  <div className="my-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-600">광고비</span>
                    <span>240,000원</span>
                  </div>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-600">기타</span>
                    <span>0원</span>
                  </div>
                </div>
              </div>
              <div className="flex cursor-pointer items-center justify-between px-6">
                <span className="font-semibold text-color-blue">순이익</span>
                <div className="flex flex-col items-end">
                  <span className="mb-1 text-xl font-bold">2,605,000원</span>
                  <span className="text-xs text-gray-500">지난 달 1,000,000원</span>
                </div>
              </div>
            </div>
            <div className="flex w-[158px] flex-col">
              <button className="px6-button button-color-main h-[38px] w-full p-0">
                <PlusWhite />
                <span className="ms-1">매입 내역 추가</span>
              </button>
              <button className="px6-button button-color-main mt-2.5 h-[38px] w-full p-0">
                <DownloadWhite />
                <span className="ms-1">소명 자료 다운</span>
              </button>
            </div>
          </div>

          <div className="gray-rounded mb-3 mt-6 flex items-center px-5 py-4">
            <div className="flex items-center">
              <span className="me-4 font-semibold text-gray-600">기간</span>
              {durationList.map((duration, key) => (
                <React.Fragment key={key}>
                  <button
                    className={`h-[30px] ${
                      currentDuration === key ? 'selector-selected' : 'selector'
                    }`}
                    onClick={() => {
                      setCurrentDuration(key);
                    }}
                  >
                    {duration}
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div className="mx-5 h-6 border-e border-color-border"></div>
            <div className="ms-2 flex items-center">
              <span className="me-4 font-semibold text-gray-600">마켓</span>
              {marketList.map((market, key) => (
                <React.Fragment key={key}>
                  <button
                    className={`h-[30px] ${
                      currentMarket === key ? 'selector-selected' : 'selector'
                    }`}
                    onClick={() => {
                      setCurrentMarket(key);
                    }}
                  >
                    {market}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex w-full items-center justify-between font-medium">
            <div className="flex">
              <button className="round-small-button">
                <TruckBlack />
                <span className="ms-1">배송중 처리</span>
              </button>
              <button className="round-small-button ms-2">
                <ExcelBlack />
                <span className="ms-1">주문상세 엑셀다운</span>
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-xs text-gray-500">업데이트 시간: {getTime()}</span>
              <button className="round-small-button ms-2">
                <ReplayBlack />
                <span className="ms-1">새로고침</span>
              </button>
            </div>
          </div>

          {/* <div className="font-medium">
            <table className="w-full mt-3 border-collapse table-fixed border-spacing-0">
              <thead className="h-10 border-t border-b border-color-border text-xs text-gray-500 text-center">
                <tr className="flex items-center py-2 pe-2.5">
                  <th className="orderlist-th w-[28px] pe-2"></th>
                  <th className="orderlist-th w-[34px] me-2.5">마켓</th>
                  <th className="orderlist-th w-[110px]">주문번호/시간</th>
                  <th className="orderlist-th w-[calc(100%_-_1112px)] overflow-hidden text-ellipsis line-clamp-1">
                    상품명
                  </th>
                  <th className="orderlist-th w-[74px]">옵션명</th>
                  <th className="orderlist-th w-10">수량</th>
                  <th className="orderlist-th w-[74px]">가격 {"(원가)"}</th>
                  <th className="orderlist-th w-[74px]">예상마진</th>
                  <th className="orderlist-th w-[74px]">주문자 정보</th>
                  <th className="orderlist-th w-[70px]">
                    해외발주여부
                    <div className="text-[10px]">{"(기록용)"}</div>
                  </th>
                  <th className="orderlist-th w-[74px]">
                    해외구매
                    <br />
                    주문번호
                  </th>
                  <th className="orderlist-th w-[68px]">
                    배대지접수
                    <div className="text-[10px]">{"(기록용)"}</div>
                  </th>
                  <th className="orderlist-th w-[74px]">
                    배대지
                    <br />
                    주문번호
                  </th>
                  <th className="orderlist-th w-[74px]">배대지 비용</th>
                  <th className="orderlist-th w-[100px]">배송정보</th>
                  <th className="orderlist-th w-[50px]">원본 상품</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" flex items-center py-2 pe-2.5 border-b border-color-border">
                  <td className="orderlist-th w-[28px] pe-2"></td>
                  <td className="orderlist-th w-[34px] me-2.5">마켓</td>
                  <td className="orderlist-th w-[110px]">주문번호/시간</td>
                  <td className="orderlist-th w-[calc(100%_-_1112px)] overflow-hidden text-ellipsis line-clamp-1">
                    상품명
                  </td>
                  <td className="orderlist-th w-[74px]">옵션명</td>
                  <td className="orderlist-th w-10">수량</td>
                  <td className="orderlist-th w-[74px]">가격 {"(원가)"}</td>
                  <td className="orderlist-th w-[74px]">예상마진</td>
                  <td className="orderlist-th w-[74px]">주문자 정보</td>
                  <td className="orderlist-th w-[70px]">
                    해외발주여부
                    <div className="text-[10px]">{"(기록용)"}</div>
                  </td>
                  <td className="orderlist-th w-[74px]">
                    해외구매
                    <br />
                    주문번호
                  </td>
                  <td className="orderlist-th w-[68px]">
                    배대지접수
                    <div className="text-[10px]">{"(기록용)"}</div>
                  </td>
                  <td className="orderlist-th w-[74px]">
                    배대지
                    <br />
                    주문번호
                  </td>
                  <td className="orderlist-th w-[74px]">배대지 비용</td>
                  <td className="orderlist-th w-[100px]">배송정보</td>
                  <td className="orderlist-th w-[50px]">원본 상품</td>
                </tr>
              </tbody>
            </table>
          </div> */}

          <table className="mt-3 w-full table-fixed border-collapse">
            <thead className="h-10 border-y border-color-border text-center text-xs text-gray-500">
              <tr className="flex items-center py-2 pe-2.5">
                <th className="w-[44px]"></th>
                <th className="orderlist-th me-2.5 w-[34px]">마켓</th>
                <th className="orderlist-th w-[110px]">주문번호/시간</th>
                <th className="orderlist-th w-[calc(100%_-_1112px)]">상품명</th>
                <th className="orderlist-th w-[74px]">옵션명</th>
                <th className="orderlist-th w-10">수량</th>
                <th className="orderlist-th w-[74px]">가격 {'(원가)'}</th>
                <th className="orderlist-th w-[74px]">예상마진</th>
                <th className="orderlist-th w-[74px]">주문자 정보</th>
                <th className="orderlist-th w-[70px]">
                  해외발주여부
                  <div className="text-[10px]">{'(기록용)'}</div>
                </th>
                <th className="orderlist-th w-[74px]">
                  해외구매
                  <br />
                  주문번호
                </th>
                <th className="orderlist-th w-[68px]">
                  배대지접수
                  <div className="text-[10px]">{'(기록용)'}</div>
                </th>
                <th className="orderlist-th w-[74px]">
                  배대지
                  <br />
                  주문번호
                </th>
                <th className="orderlist-th w-[74px]">배대지 비용</th>
                <th className="orderlist-th w-[100px]">배송정보</th>
                <th className="orderlist-th w-[50px]">원본 상품</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              <tr className="flex items-center border-b border-color-border py-2 pe-2.5">
                <td>ddd</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
