/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'brandpurple': '#BDABE0',
        'brandblack' : '#262523',
        'brandcream' : '#F6EEE3',
      },
      
      textColor: {
        'brandpurple': '#BDABE0',
        'brandblack' : '#262523',
        'brandcream' : '#F6EEE3',
        'ibpurple': '#9900FF',
        'ibpink': '#FF00D9'
        
      },
      fontSize: {
        '12.3vw': '12.3076923077vw',
        '10.3vw': '10.3076923077vw',
        '6.3vw': '6.3076923077vw',
        '7.3vw': '7.3076923077vw',
        '4.3vw': '4.3076923077vw',
        '1.9vw': '1.9vw',
        '1.35vw': '1.35vw',
        '1.7vw': '1.7vw',
      },
      fontFamily: {
        'arial':'arial',
        'homemade': 'Homemade-Apple',
        'homemadecursive': ['Homemade-Apple', 'cursive'],
        'Cinzel' : ['Cinzel-Decorative, cursive'], 
        'Libre': ['Libre-Barcode-39'],
        'Poiret': ['Poiret-One'],
      },
      fontWeight: {
        '500': '500'
      },
      letterSpacing: {
        '-.04em': '-.04em;'
      },
      lineHeight: {
        '.82': '.82',
        '1': '1',
      },
      zIndex: {
        '999':'999'
      },

      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-833px)' },
        },
        spinAround: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      
      },
      animation: {
        scroll: 'scroll 20s infinite ',
        spinAround: 'spinAround 9s infinite',
        ease: 'ease-in'
      },
      
    },
  },
  plugins: [],
}
