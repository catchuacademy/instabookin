// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',     // App Router pages
    './src/components/**/*.{js,ts,jsx,tsx}', // Your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
