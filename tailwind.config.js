/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,html}",
    "./js/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
