/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesque: ['"Darker Grotesque"', 'sans-serif'],
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

