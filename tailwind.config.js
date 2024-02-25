module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'super-orange': '#E55937',
        'super-gold': '#FFE974',
        'super-red': '#A70000',
      },
      fontSize: {
        'super-big': '12.25rem',
      },
      fontFamily: {
        'sans': ['Gopher', 'sans-serif']
      }
    },
  },
  plugins: [],
}