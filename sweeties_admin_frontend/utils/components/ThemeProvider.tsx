'use client'

import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { themeOptions } from '../../theme/theme'

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <MuiThemeProvider theme={themeOptions}>{children}</MuiThemeProvider>
}
