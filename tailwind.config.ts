import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        personality: 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      colors: {
        primary: {
          '50': '#fff1f1',
          '100': '#ffdfe0',
          '200': '#ffc5c7',
          '300': '#ff9da0',
          '400': '#ff6469',
          '500': '#ff343b',
          '600': '#ed151c',
          '700': '#c80d13',
          '800': '#a60f14',
          '900': '#881418',
          '950': '#4b0406',
        },
        secondary: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#2a2a2a',
        },
        copy: {
          white: '#ffffff',
          black: '#353238',
          red: '#a60f14',
        },
      },
    },
  },
  plugins: [],
};
export default config;
