/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      gradientColorStops: {
        'white-green': ['#FFFFFF', '#3CAB80']
      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'palette-1': '#1C6758',
        'palette-2': '#3CAB80',
        'palette-3': '#90C8AC',
        'palette-4': '#ECE9D5',
        'palette-5': '#F8FAF0',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'Arial', 'sans-serif'],
      },
     backgroundImage: {
        'hero-pattern': "url('/hero-pattern-5.png')",
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
  },
  plugins: [require("@tailwindcss/forms")]
};
