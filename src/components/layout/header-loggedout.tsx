import React from 'react';

import Menu from '~/public/images/icon-24-menu.svg';
import RightArrow from '~/public/images/icon_16_right.svg';

import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Text } from '../ui/text';

export default function HeaderLoggedOut() {
  return (
    <div className="me-4 flex w-full items-center justify-end md:justify-between">
      <div className="hidden gap-x-10 ps-20 md:flex">
        <button>
          <Text as="p" size={'headline'} weight={'bold'}>
            기능소개
          </Text>
        </button>
        <button>
          <Text as="p" size={'headline'} weight={'bold'}>
            가격정책
          </Text>
        </button>
        <button>
          <Text as="p" size={'headline'} weight={'bold'}>
            사용가이드
          </Text>
        </button>
        <button>
          <Text as="p" size={'headline'} weight={'bold'}>
            고객센터
          </Text>
        </button>
      </div>
      <div> </div>
      <div className="flex items-center gap-x-2">
        {/* @ts-ignore */}
        <Button variant={'fill-black'} size={'small'} className="hidden md:block">
          로그인
        </Button>
        {/* @ts-ignore */}
        <Button variant={'fill-color'} size={'small'}>
          무료로 체험해보기
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="ms-4 block md:hidden">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={12}>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Text as="p" size={'subhead-02'} weight={'semibold'}>
                기능소개
              </Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text as="p" size={'subhead-02'} weight={'semibold'}>
                가격정책
              </Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text as="p" size={'subhead-02'} weight={'semibold'}>
                사용가이드
              </Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text as="p" size={'subhead-02'} weight={'semibold'}>
                고객센터
              </Text>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex items-center justify-between">
              <Text as="p" size={'subhead-02'} weight={'semibold'}>
                로그인
              </Text>
              <RightArrow />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
