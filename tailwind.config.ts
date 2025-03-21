import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx, mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'ldn-dark': '#2a3135',
      'ldn-grey': '#353d42',
      'ldn-light': '#868b83',
      'library-header': '#efefef',
      'library-border': '#d6d6d6',
      'footer-dark': '#1A1E21',
      darkpink: '#9e0059',
      white: '#ffffff',
    },
  },
  plugins: [],
};
export default config;
