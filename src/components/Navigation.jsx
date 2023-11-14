import React from 'react'
import LogoImg from '../images/kiqlogo_dark.png'
import { Navbar, NavLink, Logo, Box, Elink, theme } from './Styled'
import { FaTwitter, FaTelegram } from 'react-icons/fa'

const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "Contact",
    url: "/contact",
  },
  {
    text: "Litepaper",
    url: "/litepaper",
  },
]


function Navigation() {
  const { light, dark } = theme;
  return (
        <Navbar $w="100%" $gap="40px" $bgColor={light.bgColor}>
            <Box $flex $jc='flex-end'>
              <Logo width={500} height={100} src={LogoImg} alt='kryptoiq logo with name' />
            </Box>
            <Box $flex $ai="center" $jc="flex-start" $gap="20px">
              {links.map(({url, text}, idx) => {
                switch(text){
                  case "Litepaper":
                    return (
                    <Box $flex $jc="center" $ai="center" $bgColor={dark.primary} $pd="5px" $corners="5px" key={idx}>
                      <NavLink $size="lg" $thin $color={dark.secondary}  to={url}>{text}</NavLink>
                    </Box>)

                  default: 
                  return <NavLink $size="lg" $heavy $color="#000" key={idx} to={url}>{text}</NavLink>
                }})
              }
            </Box>
            <Box $flex $gap='20px' $w="5%" $jc="flex-end">
              <Elink href={'https://x.com/kryptoiq'}><FaTwitter size={20} color={dark.bgColor}/></Elink>
              <Elink href={'https://t.me/krypto_iq_official'}><FaTelegram size={20} color={dark.bgColor}/></Elink>
            </Box>
        </Navbar>
  )
}

export default Navigation
