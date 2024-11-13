/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        leetcode : {
          black : "#1a1a1a",
          darkgrey: "#262626",
          grey: "#333333",
          lightgrey: "#434343",
          white: "#f5f5f5"
        }
      }
    },
  },
  plugins: [],
}

