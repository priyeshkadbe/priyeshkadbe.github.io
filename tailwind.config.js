/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "var(--main-dark-color)",
        mainColorInverted: "var(--main-light-color)",
        fontColor: "var(--main-dark-font-color)",
        secondaryFontColor: "var(--secondary-dark-font-color)",
        middleFontColor: "var(--middle-font-color)",
        background: "var(--main-dark-color)",
        backgroundColor: "var(--dark-background)",
        cardBackground: "var(--card-dark-background)",
        footerBackground: "var(--footer-dark-background)",
      },
    },
  },
  plugins: [],
};
