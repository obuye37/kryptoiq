import React from 'react'
import LogoImg from '../images/kiqlogo_dark.png'
import { Navbar, NavLink, Logo, Box, theme } from './Styled'
// import { FaTwitter, FaTelegram } from 'react-icons/fa'

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
  return (
        <Navbar $gap="40px" $bgColor="#eee">
            <Box $flex $jc='flex-end'>
              <Logo width={500} height={100} src={LogoImg} alt='kryptoiq logo with name' />
            </Box>
            <Box $flex $ai="center" $jc="flex-start" $gap="20px">
              {links.map(({url, text}, idx) => {
                switch(text){
                  case "Litepaper":
                    return (
                    <Box $flex $jc="center" $ai="center" $bgColor={theme.dark.primary} $pd="5px" $corners="5px">
                      <NavLink $size="lg" $thin $color={theme.dark.secondary} key={idx} to={url}>{text}</NavLink>
                    </Box>)

                  default: 
                  return <NavLink $size="lg" $heavy $color="#000" key={idx} to={url}>{text}</NavLink>
                }})
              }
            </Box>
            {/* <Box flex gap='20px' w="20%" jc="center">
              <Link href={'/'}><FaTwitter /></Link>
              <Link href={'/'}><FaTelegram /></Link>
            </Box> */}
        </Navbar>
  )
}

export default Navigation
