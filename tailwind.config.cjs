/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryBlack: "#000112",
        veryDarkBlack: "#20212c",
        darkGray: "#2b2c37",
        linesDark: "#3E3F4E",
        mediumGray: "#828FA3",
        linesLight: "#E4EBFA",
        lightGray: "#F4F7FD",
        primaryPurple: "#635FC7",
        primaryPurpleHover: "#A8A4FF",
        primaryRed: "#EA5555",
        primaryBlackHover: "#FF9898",
      },

      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
