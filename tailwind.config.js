module.exports = {
  content: ["./src/**/*.js", "*.html"],
  theme: {
    extend: {
      colors: {
        "primary-0" : "#FCD14E",
        "primary-1" : "#FDF1BF",
        "primary-2" : "#FAC832",
        "color-1": "#3D7E81",
        "color-2": "#F39342"
      },
      fontFamily: {
        "primary-font": "'Gochi Hand', cursive;",
        "secondary-font": "'Questrial', sans-serif",
        "tertiary-font" : "'Sniglet', cursive"
      },
      backgroundImage: {
        'line': "url('/src/images/background.png')"
      }
    },
  },
  plugins: [],
}