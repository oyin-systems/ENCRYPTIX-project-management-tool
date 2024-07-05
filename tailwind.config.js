/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "project-tool-bg": "url('/src/assets/bg.png')", // Replace with your image path or URL
      },
    },
  },
  plugins: [],
};
