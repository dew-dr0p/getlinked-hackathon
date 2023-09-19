/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#150E28',
        primary2: '#903AFF',
        primary3: '#D434FE',
        footer: '#100B20',
        gradient: {
          1: '#903AFF',
          2: '#FE34B9',
          3: '#FF26B9'
        }
      }
    },
  },
  plugins: [],
}