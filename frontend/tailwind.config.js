/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "0 15px",
        center: true,
      },
      colors: {
        LightDark: "#1d232a",
        dark: "#1a1e24",
        light: "#a6adbb",
        xLight: "#a6adbbb3",
      },
    },
    plugins: [require("daisyui")],

  },
};
