/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FDFDFD',
      'black': '#12071A',
      'orange': '#FF5811',
      'bedge': '#EEEEEE',
      'pink': {
        DEFAULT: '#FF70E0',
        600: '#FF61DD',
      },
      'yellow': {
        DEFAULT: '#FFCD59',
        600: '#FAC64D',
      },
      'green': {
        DEFAULT: '#53EDB5',
        600: '#3BEBAB',
      },
      'blue': {
        DEFAULT: '#63E6F7',
        600: '#4EDFF2',
      },
    },
    screens: {
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    fontSize: {
      'base': ['1.125rem', {
        lineHeight: '24px',
        letterSpacing: '0.031em',
        fontWeight: '400',
      }],
      'xl': ['6rem', {
        lineHeight: '80%',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],
      'xxl': ['9rem', {
        lineHeight: '80%',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],
      '3xl': ['12rem', {
        lineHeight: '80%',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],
      'sm': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0.036em',
        fontWeight: '400',
      }],
      'sm-bold': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0.016em',
        fontWeight: '500',
      }],
      'base-bold': ['1.125rem', {
        lineHeight: '24px',
        letterSpacing: '0.031em',
        fontWeight: '500',
      }],
    },
    extend: {
      fontFamily: {
        'sans': ['"Commisioner"', ...defaultTheme.fontFamily.sans],
        'display': ['"Chewy"', 'system-ui'],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

