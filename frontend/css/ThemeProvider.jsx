import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

const themeCustom = {
  ...themeCustom,
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64
  ],
  colors: {
    primary: '#07c',
    gray: '#f6f6ff',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      m: 2
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
  },
}

export default props =>
  <ThemeProvider theme={themeCustom}>
    {props.children}
  </ThemeProvider>