/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
   
    fontFamily: {
      monsterratBold: ['Montserrat-Bold'],
      monsterratSemiBold: ['Montserrat-SemiBold'],
      monsterratExtraBold: ['Montserrat-ExtraBold'],
      monsterratExtraLight: ['Montserrat-ExtraLight'],
      monsterratLight: ['Montserrat-Light'],
      monsterratMedium: ['Montserrat-Medium'],
      monsterratRegular: ['Montserrat-Regular'],
    },
    extend: {
      colors: {
        'primary': '#0078d4',
        'primary-dark':'#106ebe'
      },
    }
  }
,
  plugins: [],
}