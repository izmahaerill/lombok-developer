const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '5rem',
        md: '6rem',
        lg: '7rem',
        xl: '8rem',
        '2xl': '9rem'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  daisyui: {
    themes: ['emerald']
  },
  plugins: [require('daisyui')]
}

module.exports = config
