'use client';
import React from 'react';

import Pending from '~/public/images/icon-12-emergency.svg';
import Error from '~/public/images/icon-12-information.svg';
import Ready from '~/public/images/icon-20-roundcheckgreen.svg';

interface StatusProps {
  status: String;
}

export default function CollectionStatus({ status }: StatusProps) {
  return (
    <>
      {status === 'error' && (
        <div className="absolute bottom-2.5 left-2.5 flex items-center rounded bg-color-red px-2 py-1 text-[11px] font-medium text-color-white">
          <Error />
          <span className="ms-1">에러 수정 필요</span>
        </div>
      )}
      {status === 'pending' && (
        <div className="absolute bottom-2.5 left-2.5 flex items-center rounded bg-color-pending px-2 py-1 text-[11px] font-medium text-color-white">
          <Pending />
          <span className="ms-1">편집 대기 중</span>
        </div>
      )}
      {status === 'ready' && (
        <div className="absolute bottom-2.5 left-2.5 flex items-center rounded bg-color-main px-2 py-1 text-[11px] font-medium text-color-white">
          <Ready />
          <span className="ms-1">업로드 준비</span>
        </div>
      )}
    </>
  );
}
