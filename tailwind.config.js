/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(192 79.3% 12.8%)",
        secondary: "#3E2DC5",
        border: "rgba(255, 255, 255, 0.15)",
      },
      maxWidth: {
        1440: "1440px",
      },
    },
  },
  plugins: [],
};
