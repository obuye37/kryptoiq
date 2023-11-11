import React from 'react'
import { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

import { Main, theme, } from './Styled'
import Navigation from './Navigation'
import Footer from './Footer'

const variants = {
  initialState: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  animatedState: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  exitState : {
    clipPath: "polygon(60% 0, 60% 0, 40% 100%, 40% 100%)",
  }
}

const Layout = ({children}) => {
  const {pathname} = window.location
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Main
        key={pathname}
        variants={variants}
        initial="initialState"
        animate="animatedState"
        exit="exitState"
        transition={{
          type:"spring",
          mass:0.35,
          stiffness:75,
          duration:0.95
        }}
      >
          {children}
      </Main>
      <Footer />
    </ThemeProvider>
        
    
    
  )
}

export default Layout
