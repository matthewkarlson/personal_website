/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
  theme: {
    extend: {
      colors: {
        coinbaseBlue: '#118FF4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
