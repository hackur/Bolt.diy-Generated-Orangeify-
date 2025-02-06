/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff5500',
          400: '#ff7733',
          900: '#802b00',
        }
      }
    },
  },
  plugins: [],
}
