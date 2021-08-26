import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

const theme1 = {
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64
  ],
  colors: {
    background: 'black',
    primary: 'tomato',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
  },
}


export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>