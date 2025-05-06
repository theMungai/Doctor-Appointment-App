// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['"DM Sans"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lexend: ['"Lexend Tera"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}