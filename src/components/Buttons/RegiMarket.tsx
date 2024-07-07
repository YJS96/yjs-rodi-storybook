import Image from 'next/image';
import React from 'react';

interface RegiMarketProps {
  store: String;
  status: String;
}

export default function RegiMarket({ store, status }: RegiMarketProps) {
  var textColor: string = 'main';

  if (status === 'pending') {
    textColor = 'pending';
  } else if (status === 'error') {
    textColor = 'red';
  }

  return (
    <button className="mb-2 me-2 flex items-center justify-center rounded bg-gray-200 px-2 py-1">
      {status === 'ready' && (
        <Image src="/images/icon-16-roundcheck-main.svg" width="12" height="12" alt="ready" />
      )}
      {status === 'pending' && (
        <Image src="/images/icon-12-emergency-fill.svg" width="12" height="12" alt="ready" />
      )}
      {status === 'error' && (
        <Image src="/images/icon-16-information-red.svg" width="12" height="12" alt="ready" />
      )}
      <span className={`ms-[3px] text-[11px] font-medium text-color-${textColor}`}>{store}</span>
    </button>
  );
}
