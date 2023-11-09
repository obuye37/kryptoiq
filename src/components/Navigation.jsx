import React from 'react'
import LogoImg from '../images/logo.png'
import { Navbar, NavLink, Logo, Box } from './Styled'
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
        <Navbar $bgColor="#eee">
            <Box $flex $jc='flex-end'>
              <Logo width={500} height={100} src={LogoImg} alt='kryptoiq logo with name' />
            </Box>
            <Box $flex $jc="flex-start" $gap="20px">
              {links.map(({url, text}, idx) => (
                <NavLink $heavy $color="#000" key={idx} to={url}>{text}</NavLink>
                ))
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
