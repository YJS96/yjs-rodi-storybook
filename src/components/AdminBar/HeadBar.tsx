import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import DownArrow from '~/public/images/down-fill.svg';
import RightArrow from '~/public/images/icon_16_right.svg';

export default function HeadBar() {
  const [isLogoutVisible, setIsLogoutVisible] = useState<Boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleLogout = () => {
    setIsLogoutVisible((prev) => !prev);
  };

  // 로그아웃 팝업 외부 클릭시 꺼지는 함수
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsLogoutVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <div className="fixed left-0 top-0 z-50 flex h-[60px] w-full select-none items-center justify-between border-b border-color-border bg-color-white px-2">
        <a href="/admin/home" className="rounded-3xl p-4 hover:bg-gray-200">
          <Image src="/images/logo.svg" width="102" height="20" alt="logo" />
        </a>
        <div
          className="me-4 flex items-center gap-x-3"
          onClick={() => {
            toggleLogout();
          }}
        >
          <div className="flex size-10 items-center justify-between overflow-hidden rounded-full">
            <Image src="/images/profile_img.png" width="40" height="40" alt="profile-image" />
          </div>
          <div className="flex flex-col justify-center ">
            <div className="text-xs font-normal no-underline">email@email.com</div>
            <div className="mt-1 w-fit rounded bg-color-bg-green20 px-2 py-[1px] text-xs font-semibold text-color-main">
              Pro Plan
            </div>
          </div>
          <DownArrow />
        </div>
        {isLogoutVisible && (
          <div
            ref={ref}
            className="absolute right-6 top-16 rounded bg-color-white p-2 drop-shadow-popup"
          >
            <button className="flex w-[130px] items-center justify-between px-3 py-2.5 text-sm font-semibold">
              <span>로그아웃</span>
              <RightArrow />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
