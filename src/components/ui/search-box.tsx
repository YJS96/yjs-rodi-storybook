import * as React from 'react';

import { Input, InputAffix, InputBox, InputContent } from '@/components/ui/input';
import SearchIcon from 'public/images/icon-24-search_type2.svg';

export interface SearchBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  state: 'default' | 'disabled' | 'error';
  size: 'default' | 'small-38' | 'small-28';
}

const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ state, size, ...props }, ref) => {
    return (
      <InputBox state={state} size={size}>
        <InputContent>
          <Input ref={ref} {...props}></Input>
          <InputAffix>
            <SearchIcon />
          </InputAffix>
        </InputContent>
      </InputBox>
    );
  },
);
SearchBox.displayName = 'SearchBox';

export { SearchBox };
