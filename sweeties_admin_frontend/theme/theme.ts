import { ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    primaryContainer: {
      main: string
      contrastText: string
    }
    secondaryContainer: {
      main: string
      contrastText: string
    }
    tertiary: {
      main: string
      contrastText: string
    }
    tertiaryContainer: {
      main: string
      contrastText: string
    }
    errorContainer: {
      main: string
      contrastText: string
    }
    surfaceVariant: {
      main: string
      contrastText: string
    }
  }

  interface PaletteOptions {
    primaryContainer: {
      main: string
      contrastText: string
    }
    secondaryContainer: {
      main: string
      contrastText: string
    }
    tertiary: {
      main: string
      contrastText: string
    }
    tertiaryContainer: {
      main: string
      contrastText: string
    }
    errorContainer: {
      main: string
      contrastText: string
    }
    surfaceVariant: {
      main: string
      contrastText: string
    }
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#8d418a',
    },
    primaryContainer: {
      main: '#ffd7f7',
      contrastText: '#380039',
    },
    secondary: {
      main: '#5156a9',
    },
    secondaryContainer: {
      main: '#e1e0ff',
      contrastText: '#070764',
    },
    tertiary: {
      main: '#7d5700',
      contrastText: '#fff',
    },
    tertiaryContainer: {
      main: '#ffdeaa',
      contrastText: '#271900',
    },
    background: {
      default: '#fffbff',
    },
    surfaceVariant: {
      main: '#eedee7',
      contrastText: '#4e444b',
    },
    text: {
      primary: '#1e1a1d',
    },
    error: {
      main: '#ba1a1a',
    },
    errorContainer: {
      main: '#ffdad6',
      contrastText: '#410002',
    },
    divider: '#7f747c',
  },
  typography: {
    h1: {
      fontFamily: 'Barlow',
      fontWeight: 300,
    },
    h2: {
      fontFamily: 'Barlow',
    },
    h3: {
      fontFamily: 'Barlow',
    },
    h4: {
      fontFamily: 'Barlow',
    },
    h5: {
      fontFamily: 'Barlow',
    },
    h6: {
      fontFamily: 'Barlow',
    },
    subtitle1: {
      fontFamily: 'Barlow',
    },
    subtitle2: {
      fontFamily: 'Barlow',
    },
    body1: {
      fontFamily: 'Montserrat',
    },
    body2: {
      fontFamily: 'Montserrat',
    },
    button: {
      fontFamily: 'Montserrat',
    },
    caption: {
      fontFamily: 'Montserrat',
    },
    overline: {
      fontFamily: 'Montserrat',
    },
  },
}
