/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          subtle: '#dbeafe',
          dark: '#1e3a8a',
        },
        ink: {
          50: '#f6f7fb',
          100: '#e2e8f3',
          200: '#c8d3e5',
          300: '#a0b2cf',
          400: '#718ab2',
          500: '#526996',
          600: '#40517a',
          700: '#354263',
          800: '#2d374f',
          900: '#1f2535',
        },
      },
      fontFamily: {
        display: ['"Pretendard Variable"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Pretendard Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
