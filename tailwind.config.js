/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-mode': '#191919',
        'light-content': '#A7A7A7',
        'gradient-start': '#E70FAA',
        'gradient-end': '#00C0FD',
        'gradient-end-font': '#13B0F5',
        'custom-gray': '#CCCCCC',
        'solid-heading': '#42446E44',
        'card-background': '#363636'
      },
      fontFamily: {
        'DMSans-Medium': ['DMSans-Medium', 'sans-serif'], // 'sans-serif' as fallback
        'DMSans-Regular': ['DMSans-Regular', 'sans-serif'], // 'sans-serif' as fallback
        'Poppins-Bold': ['Poppins-Bold', 'sans-serif'], // 'sans-serif' as fallback
        'Poppins-Regular': ['Poppins-Regular', 'sans-serif'], // 'sans-serif' as fallback
        'Poppins-Medium': ['Poppins-Medium', 'sans-serif'], // 'sans-serif' as fallback
        'Poppins-Light': ['Poppins-Light', 'sans-serif'], // 'sans-serif' as fallback
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 8s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
}

