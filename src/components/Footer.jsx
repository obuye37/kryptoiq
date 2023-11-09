import React from 'react'
import { Box } from './Styled'
import LogoImg from '../images/logo.png'

const Footer = () => {
  return (
    <Box as="footer" $w="100%" $flex  bgColor="#111" gap="10px">
    <Box $w="50%">
      <img src={LogoImg} width={150} height={50} />
    </Box>
    {/* <Box w='50%' flex gap="20px" ai="center" jc="end" pd="2rem 8rem" color='white'>
      <FaTwitter color='white'/>
      <FaTelegram color='white'/>
  </Box> */}
    </Box>
  )
}

export default Footer
