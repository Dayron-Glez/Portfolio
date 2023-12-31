/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '30% 70% 70% 30% / 30% 30% 70% 70% '}
    },
  },
  plugins: [],
}

