/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        champagne: "#F2E5C6",
        sandgold: "#F2D9A0",
        burgundy: "#75162D",
        maroon: "#560B18",
        wine: "#3B010B",
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "serif"],
        playfair: ["'Playfair Display'", "serif"],
        mono: ["'DM Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
