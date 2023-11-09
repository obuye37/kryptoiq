import React from 'react'
import { Main, } from './Styled'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <Main>
        <Navigation />
        {children}
        <Footer />
    </Main>
  )
}

export default Layout
