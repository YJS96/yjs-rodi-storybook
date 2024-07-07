'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import Logo from '~/public/images/logo.svg';

import HeaderUserinfo from './header-loggedin';
import HeaderLoggedOut from './header-loggedout';

export default function Header() {
  // 추후 API Call으로 관리 예정
  const [loggedIn, setLoggedIn] = useState<boolean>(true);

  return (
    <div className="fixed left-0 top-0 z-50 flex h-[60px] w-full select-none items-center justify-between border-b border-color-border bg-color-white px-2">
      <Link href="/admin/home" className="absolute rounded-3xl p-4 hover:bg-gray-200">
        <Logo />
      </Link>
      <div className="flex w-full justify-end ps-32">
        {/* 추후 삭제 예정 */}
        <button onClick={() => setLoggedIn(!loggedIn)} className="me-2">
          changeLoginState
        </button>
        {loggedIn ? <HeaderUserinfo /> : <HeaderLoggedOut />}
      </div>
    </div>
  );
}
