/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_light: "#FFFFFF",
        bg_dark: "#FFFFFF",
        primary: "#1E3A8A",
        secondary: "#FBBF24",
        accent: "#F472B6",
        neutral: "#374151",
        "base-100": "#FFFFFF",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
      fontFamily: {
        daily: ["Dailymirror",],
      },

    },
    fontFamily: {
    
    },
    
  },
  plugins: [],
}

