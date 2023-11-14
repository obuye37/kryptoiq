import React from 'react'
import { motion } from 'framer-motion'
import { Main } from './Styled'
import Navigation from './Navigation'
import Footer from './Footer'

const variants = {
  initialState: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  animatedState: {
    opacity: 1,
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%);",
  },
  exitState : {
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  }
}

const Layout = ({ children, path}) => {

  console.log("path: ", path)
  return (
    <>
      <Navigation />
      <Main>
        <motion.div key={path}
        variants={variants}
        initial="initialState"
        animate="animatedState"
        exit="exitState"
        transition={{
          duration:0.75
        }}>
          {children}
        </motion.div>
      </Main>
      <Footer />
    </>
        
    
    
  )
}

export default Layout
