/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#22C55E",
        accent: "#F59E0B",
        dark: "#0F172A",
      }
    },
  },
  plugins: [],
}
