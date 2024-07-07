import { User2, Verified } from 'lucide-react';
import React from 'react';

import DownArrow from '~/public/images/down-fill.svg';
import Menu from '~/public/images/icon-24-menu.svg';
import RightArrow from '~/public/images/icon_16_right.svg';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import PlanTag from '../ui/plan-tag';
import { Text } from '../ui/text';

export default function HeaderUserinfo() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <div className="me-4 hidden items-center gap-x-2.5 md:flex">
              <Avatar>
                <AvatarImage src="/images/profile_img.png" />
                <AvatarFallback>
                  <Text as="p" size={'subhead-03'} weight={'regular'}>
                    로디
                  </Text>
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center gap-y-0.5">
                <Text as="p" size={'subhead-02'} weight={'regular'}>
                  email@email.com
                </Text>
                <PlanTag variant={'proPlan'} />
              </div>
              <DownArrow />
            </div>
            <div className="me-4 block md:hidden">
              <Menu />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={12}>
          <DropdownMenuGroup className="block md:hidden">
            <DropdownMenuItem disabled>
              <User2 className="mr-2 size-4" />
              <Text as="p" size={'subhead-02'} weight={'regular'}>
                email@email.com
              </Text>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Verified className="mr-2 size-4" />
              <Text as="p" size={'subhead-02'} weight={'regular'}>
                Pro Plan
              </Text>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="block md:hidden" />
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex items-center justify-between">
              <Text as="p" size={'subhead-02'} weight={'semibold'}>
                로그아웃
              </Text>
              <RightArrow />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
