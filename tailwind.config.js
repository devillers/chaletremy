/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chalet-app': "url('/images/background-flat.png')",
        'chalet-pmr': "url('/images/chalet-remy0.jpg')",
        'chalet-booking': "url('/images/cuisine.jpeg')",
        'chalet-seminaire': "url('/images/background-seminaire.png')",
      },
    },
  },
  plugins: [],
};
