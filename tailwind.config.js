const { Volkhov } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
      height: {
        calC100: "calc(100vh - 80px)",
      },
      backgroundImage: {
        bodyBG: "url('/images/bg.png')",
        heroBG: "url('/images/heroBG.png')",
        navBG: "url('/images/navbarBG.png')",
        ftBG: "url('/images/fundamentalsBG.png')",
        ftShape: "url('/images/ftShape.png')",
        tokenomicsBG: "url('/images/tokenomicmanimg.png')",
        NavBG: "url('/assets/navbar-bg.png')",
      },
      colors: {
        secondary: "#6F767E",
      },
      fontFamily: {
        Volkhov: ["var(--font-volkhov)"],
      },
    },
  },
  plugins: [],
};
