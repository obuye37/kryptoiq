import React from 'react'
import { Main, theme, } from './Styled'
import Navigation from './Navigation'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'


const Layout = ({children}) => {
  return (
        <Main>
            <ThemeProvider theme={theme}>
                <Navigation />
                {children}
                <Footer />
            </ThemeProvider>
        </Main>
    
    
  )
}

export default Layout
