/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: {
            transform: 'translateX(-20rem)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        'slide-down-and-fade': {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-left-and-fade': {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-up-and-fade': {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-right-and-fade': {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slide 250ms ease-in',
        'slide-down-and-fade':
          'slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-and-fade':
          'slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up-and-fade':
          'slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-and-fade':
          'slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: {
        DEFAULT: '#8D418A',
        dark: '#FFAAF6',
      },
      'on-primary': {
        DEFAULT: '#FFFFFF',
        dark: '#570C58',
      },
      'primary-container': {
        DEFAULT: '#FFD7F7',
        dark: '#722871',
      },
      'on-primary-container': {
        DEFAULT: '#380039',
        dark: '#FFD7F7',
      },
      secondary: {
        DEFAULT: '#5156A9',
        dark: '#BFC1FF',
      },
      'on-secondary': {
        DEFAULT: '#FFFFFF',
        dark: '#212578',
      },
      'secondary-container': {
        DEFAULT: '#E1E0FF',
        dark: '#393D8F',
      },
      'on-secondary-container': {
        DEFAULT: '#070764',
        dark: '#E1E0FF',
      },
      tertiary: {
        DEFAULT: '#7D5700',
        dark: '#FABC49',
      },
      'on-tertiary': {
        DEFAULT: '#FFFFFF',
        dark: '#422C00',
      },
      'tertiary-container': {
        DEFAULT: '#FFDEAA',
        dark: '#5F4100',
      },
      'on-tertiary-container': {
        DEFAULT: '#271900',
        dark: '#FFDEAA',
      },
      error: {
        DEFAULT: '#BA1A1A',
        dark: '#FFB4AB',
      },
      'on-error': {
        DEFAULT: '#FFFFFF',
        dark: '#690005',
      },
      'error-container': {
        DEFAULT: '#FFDAD6',
        dark: '#93000A',
      },
      'on-error-container': {
        DEFAULT: '#410002',
        dark: '#FFDAD6',
      },
      outline: {
        DEFAULT: '#7F747C',
        dark: '#9A8D95',
      },
      'outline-variant': {
        DEFAULT: '#D1C3CB',
        dark: '#4E444B',
      },
      background: {
        DEFAULT: '#FFFBFF',
        dark: '#1E1A1D',
      },
      'on-background': {
        DEFAULT: '#1E1A1D',
        dark: '#E9E0E4',
      },
      'surface-variant': {
        DEFAULT: '#EEDEE7',
        dark: '#4E444B',
      },
      'on-surface-variant': {
        DEFAULT: '#4E444B',
        dark: '#D1C3CB',
      },
      scrim: {
        DEFAULT: '#00000029',
      },
    },
  },
  plugins: [],
}
