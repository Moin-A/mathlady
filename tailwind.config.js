

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  theme: {
    colors: {
      'white': '#ffffff',
    },
    fontFamily: {
      'sans-serif': ["'Source Sans 3', sans-serif"],
      'merriweather-sans': ["'Merriweather Sans', sans-seri"]
    },
    extend: {
      boxShadow: {
        '3xl': '0px 2px 4px 3px #1018280F',
        'button': '0px 4px 8px -2px #1018281A'
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      content: {
        'soundIcon': "url('./public/sound.svg')",
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    },
  },
  plugins: [
    'flowbite/plugin'
  ],

}





