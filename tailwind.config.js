/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#3B4A97",
        "custom-purple": "#220154",
      },
    },
  },
  plugins: [],
};
