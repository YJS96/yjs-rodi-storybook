'use client';
import React from 'react';

import Header from '@/components/layout/header';
import SideBar from '@/components/layout/sidebar';

interface AdminProps {
  children: React.ReactNode;
}

export default function Admin({ children }: AdminProps) {
  return (
    <>
      <Header />
      <SideBar />
      <div className="size-full ps-[68px] pt-[60px] transition-all duration-200 md:ps-[200px]">
        <div className="min-w-[1248px] px-6 pb-12 pt-[30px]">{children}</div>
      </div>
    </>
  );
}
