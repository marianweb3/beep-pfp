/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm_plex: ["'IBM Plex Mono'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
