import * as React from "react"
import { FaTwitter, FaFacebook, FaTelegram } from 'react-icons/fa'

import { Box, Heading, Text, Button, Image, theme, Icons, Elink } from '../components/Styled'
import BrainBulb from '../images/iqbrain.svg'
import HeroImage from '../images/hero-img.svg'
import Abg from '../images/iqBg.webp'

const IndexPage = () => {
  const { light, dark } = theme;
  return (
    <>
      <Box className="hero-slant-2" $bgColor={light.secondary}>
        <Box $flex $pd="7rem" $bgColor={light.bgColor} $w="100%" className="hero-slant">
          <Box $pd="2rem 8rem">
            <Text $size='lg' $heavy>Welcome to Krypto IQ</Text>
            <Heading $size="xxlg" $weight={900} $xlg $italize>Learn and Earn in a Fun Way</Heading>
            <Text $size='lg' $color="#">Learn and Earn in a fun way</Text>
          </Box>
          <Box $flex $jc="flex-start"  $w="60%" >
            <img width={300} height={300} alt='hero image' src={HeroImage} />
          </Box>
        </Box>
      </Box>

    {/* About Section */}
    <Box $flex $bgImage={`${Abg}`} $bgPos="top" $w="100%" $ai='center' style={{position:'relative'}}>
      <div style={{position:"absolute", background:'#000c', width:'100%', height:'100%'}}></div>
      <Box $flex $fd="column" $pd="8rem" $ai='center' $gap="10px" $w="80%" $mg="auto" style={{zIndex: 1000}}>
        <Heading $size='xxlg' $color='#eee'> Krypto <Text as='span' $color={dark.primary} $size="xxlg" weight={900}>IQ</Text></Heading>
        <Text $align="center" $size="lg" $color='#eee' $width="70%">We are here to help you make money while you are catching all the fun on this exciting crypto space</Text>
        <Button $large $size="md" $bgColor={dark.primary} $color='#111'> Learn More... </Button>
      </Box>
    </Box>

      {/* Join Section */}
      <Box $flex $pd="6rem" $ai="center" $bgColor="black" >
        <Box $pd="0 2rem 0 6rem " $w="100%">
          <Text $align="right" $size="lg" $color={light.primary}>Join Us &</Text>
          <Heading $align="right" $color="#eee" $weight="900" $size='xxlg'>Boost your Crypto Knowledge</Heading>
          <Box $flex $jc="right" $ai="center" $gap="10px">
            <Text $size="md" $align="center" style={{borderBottom: `1px solid ${light.secondary}`,}}>follow </Text>
            <Icons $flex $ai="center">
              <Elink href="https://t.me/kryptoiq_official"><FaTelegram size={20} color="#eee" /></Elink>
              <Elink href="https://x.com/kryptoiq"><FaTwitter size={20} color="#eee"/></Elink>
            </Icons>
          </Box>
        </Box>
      <Box  $flex $jc="left" $w="70%">
          <Image $rot="15deg" $width="250px" $height="auto" src={BrainBulb}/>
        </Box>
      </Box>

      {/* How it Works Section */}
      <Box $bgColor='#ffcc00' $pd="2rem">
        <Heading as='h1' $align="center" $size='4rem'>How it Works</Heading>
        <Box $w="100%" $flex style={{flexWrap:'wrap'}}>
          <Box $w="50%" $pd="2rem"  >
            <Box $w='25%' $pd=".2rem 1rem" $corners="5px" $bgColor="#c9a100">
              <Text $size="md" $color="#eee" $pd=".2rem">1. Join</Text>
            </Box>
            <Text $size="1.2rem">Begin your earning journey with us by following us on twitter and joining our telegram channel to get updates and learn your way into earning your probably first crypto</Text>
          </Box>
          <Box $w="50%" $pd="2rem">
            <Box $w='25%' $pd=".2rem 1rem" $corners="5px" $bgColor="#c9a100">
              <Text $size="md" $color="#eee" $pd=".2rem">2. Learn</Text>
            </Box>
            <Text $size="1.2rem">Read our threads, twits and channel updates to get good knowledge and understanding on crypto assets, defi, nft, blockchain and more</Text>
          </Box>
          <Box $w="50%" $pd="2rem">
            <Box $w='25%' $pd=".2rem 1rem" $corners="5px" $bgColor="#c9a100">
              <Text $size="md" $color="#eee" $pd=".2rem">3. Play</Text>
            </Box>
            <Text $size="1.2rem">Keep Watch and join our learn to earn quiz and competitions, get the right answer while fulfilling all necessities</Text>
          </Box>
          <Box $w="50%" $pd="2rem">
            <Box $w='25%' $pd=".2rem 1rem" $corners="5px" $bgColor="#c9a100">
              <Text $size="md" $color="#eee" $pd=".2rem">4. Earn</Text>
            </Box>
            <Text $size="1.2rem">Correctly answered our question? Drop your wallet to receive appropriately</Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
