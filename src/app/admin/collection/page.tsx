'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import CollectionStatus from '@/components/Buttons/CollectionStatus';
import PrevPage from '~/public/images/icon-16-right.svg';
import CheckGoods from '~/public/images/icon-20-checkUnsel.svg';
import Delete from '~/public/images/icon-20-delete.svg';
import Download from '~/public/images/icon-20-download.svg';
import URLCollect from '~/public/images/icon-20-link.svg';
import CheckSel from '~/public/images/icon-20-roundcheck-black.svg';
import CheckUnsel from '~/public/images/icon-20-roundcheckUnsel.svg';
import Upload from '~/public/images/icon-20-upload-cloud.svg';
import SearchIcon from '~/public/images/icon-24-search_type2.svg';

import TempList from './TempList.json';

interface ItemProps {
  index: Number;
  date: String;
  name: String;
  category: String;
  img: String;
  status: String;
}

export default function Collection() {
  const [categoryIndex, setCategoryIndex] = useState<Number>(0);
  const [selectedItems, setSelectedItems] = useState<Number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState({ start: 1, end: 5 });

  useEffect(() => {
    setSelectedItems([]);
  }, [currentPage]);

  // 임시 리스트
  const categoryList = ['모두보기', '내가 수집한 상품', '직원1', '직원2'];

  const handleCategory = (index: Number) => {
    setCategoryIndex(index);
  };

  // 임시 리스트
  const itemList: ItemProps[] = TempList;

  // 페이지네이션
  const itemsPerPage = 15;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // 현재 페이지에 보여지는 상품
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => {
    return { ...item, globalIndex: indexOfFirstItem + index + 1 };
  });
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(itemList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 이전 페이지
  const handlePrevPage = () => {
    if (pageRange.start > 1) {
      const newPage = pageRange.start - 1;
      setCurrentPage(newPage);
      setPageRange({ start: newPage - 4, end: newPage });
    }
  };

  // 다음 페이지
  const handleNextPage = () => {
    if (pageRange.end < Math.ceil(itemList.length / itemsPerPage)) {
      const newPage = pageRange.end + 1;
      setCurrentPage(newPage);
      setPageRange({ start: newPage, end: newPage + 4 });
    }
  };

  const renderPageNumbers = pageNumbers
    .filter((number) => number >= pageRange.start && number <= pageRange.end)
    .map((number) => (
      <React.Fragment key={number}>
        <button
          onClick={() => setCurrentPage(number)}
          className={`page-button transition-200 text-sm font-normal ${
            number === currentPage ? 'bg-color-bg-green10 text-color-main' : 'text-gray-500'
          }`}
        >
          {number}
        </button>
      </React.Fragment>
    ));

  // 아이템 개별 선택
  const handleItemCheck = (globalIndex: Number) => {
    if (selectedItems.includes(globalIndex)) {
      setSelectedItems(selectedItems.filter((itemIndex) => itemIndex !== globalIndex));
    } else {
      setSelectedItems([...selectedItems, globalIndex]);
    }
  };

  // 아이템 전체 선택
  const handleSelectAll = () => {
    if (selectedItems.length === currentItems.length) {
      setSelectedItems([]);
    } else {
      const allItems = currentItems.map((item) => item.index);
      setSelectedItems(allItems);
    }
  };

  return (
    <>
      <div className="mb-5">
        <span className="header-text">수집상품</span>
        <span className="ms-3 text-sm font-medium text-color-main">총 {TempList.length}건</span>
      </div>
      <div className="flex h-[48px]">
        <div className="relative flex h-full w-64 items-center">
          <input
            className="h-full w-64 rounded-lg border border-color-border bg-color-white ps-4 text-sm font-light"
            placeholder="상품명 검색"
            type="text"
          />
          <button
            className="absolute right-3 flex size-9 items-center justify-center"
            type="submit"
          >
            <SearchIcon />
          </button>
        </div>
        <button className="px4-button button-color-main ms-3">
          <URLCollect />
          <span className="ms-1">URL 수집</span>
        </button>
        <button className="px4-button button-color-main ms-3">
          <URLCollect />
          <span className="ms-1">엑셀 수집</span>
        </button>
        <button className="px4-button ms-3 border border-gray-700  bg-color-white text-gray-700 transition-all duration-200 hover:bg-gray-200">
          <Download />
          <span className="ms-1">엑셀 샘플 다운로드</span>
        </button>
      </div>
      <div className="mt-7">
        <div className="flex h-[30px] items-center">
          {categoryList.map((category, index) => (
            <React.Fragment key={index}>
              <button
                className={categoryIndex === index ? 'selector-selected' : 'selector'}
                onClick={() => {
                  handleCategory(index);
                }}
              >
                {category}
              </button>
            </React.Fragment>
          ))}
        </div>
        <div className="mt-4 flex h-14 w-full select-none items-center justify-between rounded-lg bg-gray-300 py-[9px] pe-[10px] ps-5">
          <div className="flex">
            <div
              className="flex"
              onClick={() => {
                handleSelectAll();
              }}
            >
              {selectedItems.length === 15 ? <CheckSel /> : <CheckUnsel />}
              <span className="ms-[6px] text-sm font-medium text-gray-600">
                {selectedItems.length}개 선택
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="px6-button transition-200 bg-color-white text-gray-700 hover:bg-gray-100">
              <Delete />
              <span className="ms-1">삭제</span>
            </div>
            <div className="px6-button transition-200 ms-[10px] bg-gray-900 text-color-white hover:bg-color-black">
              <Upload />
              <span className="ms-1">업로드</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 grid w-full grid-cols-5 grid-rows-3 gap-x-4 gap-y-8">
        {currentItems.map((item, key) => (
          <React.Fragment key={key}>
            <div
              className="group relative flex cursor-pointer select-none flex-col"
              onClick={() => {
                handleItemCheck(item.globalIndex);
              }}
              key={key}
            >
              <div className="relative">
                <div
                  className={`item-select bg-color-black ${
                    selectedItems.includes(item.globalIndex) ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <CheckGoods />
                </div>
                <div className="flex h-auto w-full items-center justify-center overflow-hidden rounded-lg bg-gray-300">
                  <Image
                    className="transition-200 group-hover:scale-105"
                    src="/images/eximg_01.png"
                    width="500"
                    height="500"
                    alt="item"
                  />
                </div>
                <CollectionStatus status={item.status} />
              </div>
              <div className="mt-4">
                <div className="text-xs font-normal text-gray-600">{item.date}</div>
                <div className="mt-3 line-clamp-2 overflow-hidden text-ellipsis text-sm font-medium">
                  {item.name}
                </div>
                <div className="mt-1 line-clamp-1 overflow-hidden text-ellipsis text-xs font-light text-gray-500">
                  {item.category}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center pt-10">
        <button className="page-button" onClick={handlePrevPage}>
          <PrevPage />
        </button>
        {renderPageNumbers}
        <button className="page-button rotate-180" onClick={handleNextPage}>
          <PrevPage />
        </button>
      </div>
    </>
  );
}
