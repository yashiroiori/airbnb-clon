module.exports = {
  purge: [
    './dist/**/*.html',
    './dist/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
        'home-cta': "url('../assets/home-cta.jpg')",
        'home-hero': "url('../assets/home-hero.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}