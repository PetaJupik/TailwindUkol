/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                
    "./src/**/*.{html,js,css,vue,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        'primary-green': '#74C69D', 
        'dark-text': '#212529',
        'light-text': '#5E5E5E', 
        'button-dark': '#212529',
        'section-gray': '#F8F9FA',
        'border-light': '#EAEAEA',
      },


      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],

      },


      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        'hero-subtitle': ['1.125rem', { lineHeight: '1.75rem' }], 
        'label-uppercase': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.05em' }],
      },

      borderRadius: {
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'card': '0.5rem',
        'button': '0.375rem',
        'full': '9999px',
      },

      boxShadow: {
        'card': '0px 4px 15px rgba(0, 0, 0, 0.06)',
        'interactive': '0px 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },

  plugins: [

  ],
}