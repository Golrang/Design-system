module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
        bounce800: 'bounce 2s infinite 600ms',
        pulse200: 'pulse 1s linear infinite 20ms',
      },
      boxShadow: {
        blue: '0 5px 5px -3px rgba(0, 0, 50, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        width: 'width',
        spacing: 'padding',
        position: 'position',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(+100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(+300px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(+10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'fade-in-right': 'fade-in-right 0.4s ease-in-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'fade-in-right-fast': 'fade-in-right 0.1s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [
  //   require('@tailwindcss/forms'),
  //   // ...
  // ],
}
