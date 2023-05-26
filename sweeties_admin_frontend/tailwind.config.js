/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
    },
    fontFamily: {
      display: ['Barlow', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
