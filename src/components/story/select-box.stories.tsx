import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectDemoProps {
  options: SelectOption[];
  title: string;
  state: 'default' | 'disabled';
  size: 'default' | 'small-38' | 'small-28';
  label: string;
}

export const SelectDemo: React.FC<SelectDemoProps> = ({ options, title, state, size, label }) => {
  return (
    <Select>
      <SelectTrigger className="w-[340px]" size={size} title={title} state={state}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} size={size}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const options: SelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' },
];

const meta: Meta<typeof SelectDemo> = {
  title: 'SelectBox',
  component: SelectDemo,
  args: {
    title: '입력 항목',
    options,
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'disabled'],
    },
    size: {
      control: 'select',
      options: ['default', 'small-38', 'small-28'],
    },
  },
};

export const Default: StoryObj<typeof SelectDemo> = {};

export default meta;
