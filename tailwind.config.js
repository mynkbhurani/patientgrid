/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        reverseGradient: {
          '0%': {
            backgroundImage: 'linear-gradient(90.51deg, #87CEFA 3.78%, #2A0896 96.65%)',
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundImage: 'linear-gradient(90.51deg, #2A0896 3.78%, #87CEFA 96.65%)',
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundImage: 'linear-gradient(90.51deg, #87CEFA 3.78%, #2A0896 96.65%)',
            backgroundPosition: '0% 50%'
          }
        }
      },
      animation: {
        reverseGradient: 'reverseGradient 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
