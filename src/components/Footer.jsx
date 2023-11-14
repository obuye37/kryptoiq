import React from 'react'
import { Box, Elink, theme } from './Styled'
import LogoImg from '../images/kiqlogo_dark.png'
import {FaTwitter, FaTelegram } from "react-icons/fa"

const Footer = () => {
    const { light, dark } = theme;
  return (
    <Box as="footer" $w="100%" $flex  $bgColor={light.fgColor} $gap="10px">
        <Box $pd="3rem" width="100%">
            <img src={LogoImg} width={120}/>
        </Box>
        <Box $flex $w='100%' $gap="10px" $ai="center" $jc="flex-end" $pd="2rem 8rem" $color='eee'>
            <Elink href='https://x.com/kryptoiq'><FaTwitter size={20} color={light.bgColor} /></Elink>
            <Elink href='https://t.me/kryptoiq_official'><FaTelegram size={20} color={light.bgColor}/></Elink>
        </Box>
    </Box>
  )
}

export default Footer
