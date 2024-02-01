/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../../packages/styles-library/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
