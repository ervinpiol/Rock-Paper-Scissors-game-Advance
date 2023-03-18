/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BarlowSemi: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        DarkText: "hsl(229, 25%, 31%)",
        ScoreText: "hsl(229, 64%, 46%)",
        HeaderOutline: "hsl(217, 16%, 45%)",
      },
      content: {
        Pentagon: "url('./assets/bg-pentagon.svg')",
      },
      screens: {
        xs: { max: "480px" },
        ss: {
          min: "481px",
          max: "768px",
          raw: "(min-width: 481px) and (max-width: 768px)",
        },
        md: {
          min: "768px",
          max: "992px",
          raw: "(min-width: 768px) and (max-width: 992px)",
        },
        lg: {
          min: "992px",
          max: "1200px",
          raw: "(min-width: 992px) and (max-width: 1200px)",
        },
        xl: {
          min: "1200px",
          max: "1400px",
          raw: "(min-width: 1200px) and (max-width: 1400px)",
        },
      },
    },
  },
  plugins: [],
};
