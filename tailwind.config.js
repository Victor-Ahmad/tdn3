module.exports = {
  darkMode: "class", // Enable dark mode
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        dark: "#0a0a0a",
        light: "#ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
