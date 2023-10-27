/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      '2xl': '1080px',
    },
    extend: {
      height: {
        600: '600px',
      }
    },
  },
  plugins: [],

  // nên setup ngay từ đấu
  // corePlugins: {
  //   preflight: false,
  // },
}