import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import { useMediaQuery, createTheme, CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import React from 'react'
import { Dancing_Script } from '@next/font/google'

const dancing_script = Dancing_Script({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: dancing_script.className
        }
      }),
    [prefersDarkMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
