/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '20px',
        xl: '30px',
        '2xl': '50px',
      },
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

