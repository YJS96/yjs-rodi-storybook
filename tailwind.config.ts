import type { Config } from 'tailwindcss';

import { colors } from './src/components/token/colors';
import { radius } from './src/components/token/radius';

const config = {
  darkMode: ['class'],
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    screens: {
      // phone
      xs: '520px',
      // tablet(portrait)
      sm: '768px',
      // tablet(landscape)
      md: '1024px',
      // laptop
      lg: '1280px',
      // desktop
      xl: '1640px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
        // from shadcn
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // from previous tailwindconfig
        'color-main': '#2CB97C',
        'color-lightmain': '#90F899',
        'color-main-hover': '#28AA72',
        'color-black': '#000000',
        'color-red': '#FF3233',
        'color-blue': '#4A7FF7',
        'color-border': '#E5E8EB',
        'color-bg-green10': '#E9F7F1',
        'color-bg-green20': '#E9FEEB',
        'color-bg-green30': '#E9F8F2',
        'color-bg-violet': '#F2EFFC',
        'color-white': '#FFFFFF',
        'color-guide': '#EAF8F2',
        'color-qna': '#EDF2FE',
        'color-help-center': '#FDF8E8',
        'color-help-hover': '#DEB00B',
        'naver-button': '#03c75a',
        'naver-button-hover': '#03bd56',
        'kakao-button': '#fee500',
        'kakao-button-hover': '#fadd00',
        'google-button-hover': '#f2f5fa',
        'color-pending': '#FEA218',
        'chip-red-1': '#CF4275',
        'chip-red-2': '#DA7499',
        'chip-red-3': '#EEADC4',
        colors
      },
      // from shadcn
      borderRadius: radius,
      // {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      // from previous tailwindconfig
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        login: '2px 2px 36px rgba(109, 233, 166, 0.16)',
        popup: '0px 0px 12px rgba(0, 0, 0, 0.16)',
      },
      boxShadow: {
        tab: 'inset 0 -1px 0 #E5E8EB',
        'tab-selected': 'inset 0 -2px 0 #191F28',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
