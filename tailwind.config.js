/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        mono: ["Courier New", "Courier", "monospace"],
      },
      colors: {
        // Brand palette — red + neutral stone
        brand: {
          red: "#dc2626",    // red-600
          dark: "#0c0a09",   // stone-950
          mid: "#292524",    // stone-800
        },
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
