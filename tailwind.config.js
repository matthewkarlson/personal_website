/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
  theme: {
    extend: {
      colors: {
        coinbaseBlue: '#0052FF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
