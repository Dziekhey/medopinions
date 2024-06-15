/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Poppins, sans-serif",
      },
      colors: {
        blue: '#0A73B0',
        light_blue: '#189cdf',
        grey: '#dcdcdc',
        light_grey: '#f7f7f7'
      }
    },
  },
  plugins: [],
};
