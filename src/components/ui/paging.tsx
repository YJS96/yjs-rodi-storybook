import { useMemo, useState } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface PagingProps {
  /** 전체 페이지 개수 */
  totalPage: number;
  /** 한 줄 당 표시될 항목의 수 */
  itemsPerGroup: number;
  /** 선택된 페이지 번호 변경 함수 */
  onChange: (index: number) => void;
}

const Paging: React.FC<PagingProps> = ({ totalPage, itemsPerGroup, onChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalGroups = Math.ceil(totalPage / itemsPerGroup);

  const currentPageGroup = useMemo(() => {
    const normalStartPage = currentPage - Math.floor(itemsPerGroup / 2);
    const lastitemsPerGroupStartPage = totalPage - itemsPerGroup + 1;
    const startPage = Math.max(1, Math.min(normalStartPage, lastitemsPerGroupStartPage));

    return Array.from(
      { length: Math.min(itemsPerGroup, totalPage) },
      (_, index) => startPage + index,
    );
  }, [currentPage, totalPage, itemsPerGroup]);

  const hasNextPageGroup = () => {
    return totalGroups > 1 && currentPage + Math.floor(itemsPerGroup / 2) < totalPage;
  };

  const getPreviousPageNumber = () => {
    return Math.max(1, currentPage - Math.floor(itemsPerGroup / 2));
  };

  const getNextPageNumber = () => {
    return Math.min(totalPage, currentPage + Math.floor(itemsPerGroup / 2));
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              setCurrentPage(getPreviousPageNumber());
              onChange(currentPage);
            }}
          />
        </PaginationItem>

        {currentPageGroup.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              onClick={() => {
                setCurrentPage(page);
                onChange(currentPage);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {hasNextPageGroup() && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              setCurrentPage(getNextPageNumber());
              onChange(currentPage);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export { Paging };
