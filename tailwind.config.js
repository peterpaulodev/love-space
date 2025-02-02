import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: 'black',
        secondary: 'white',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        '2xl': '12.5rem',
      },
    },
  },
  plugins: [flowbitePlugin],
}
