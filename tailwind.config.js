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
    screens: {
      'small-mobile': '320px',
      'mobile': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'custom-lg': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens: {
        'short': { 'raw': '(max-height: 750px)' },
      },
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
        lato: ['Lato', 'Arial', 'sans-serif'],
        abril: ['Abril Fatface', 'Arial', 'cursive'],
      },
     backgroundImage: {
       'hero-pattern': ["url('/imgs/hero-pattern-5.webp')", "url('/imgs/hero-pattern-5.png')"],
       'hero-cover': ["url('/imgs/mowing-man.webp')", "url('/imgs/mowing-man.jpg')"],
       'about': ["url('/imgs/hedge-trimming-2.webp')", "url('/imgs/hedge-trimming-2.jpg')"],
       'contact': ["url('/imgs/contact-bg.webp')", "url('/imgs/contact-bg.jpg')"],
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
  },
  plugins: [require("@tailwindcss/forms")]
};
