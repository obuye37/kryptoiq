import React from 'react'
import { Main, theme, } from './Styled'
import Navigation from './Navigation'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'


const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <Main>
            <Navigation />
            {children}
            <Footer />
        </Main>
    </ThemeProvider>
    
  )
}

export default Layout
