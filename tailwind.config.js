/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "1sm": "0px 1px 2px rgba(0, 0, 0, 0.2);",
        "2sm": "0px 3px 3px rgba(0, 0, 0, 0.160784)",
        "3sm": "0px -3px 3px rgba(0, 0, 0, 0.0509804);",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
