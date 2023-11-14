import React from 'react'
import HeroImage from '../../images/iqBg.webp'
import BrainBulb from '../../images/iqbrain.svg'
import Kiqgoal from '../../images/kiqgoal.svg'

import { FaTwitter, FaFacebook, FaTelegram, FaLowVision, FaFlag, FaEye } from 'react-icons/fa'
import { Box, Heading, Text, Button, Image, theme, Icons, Elink } from '../../components/Styled'


const About = () => {
const { light, dark } = theme
  return (
      <>
        <Box $flex $bgImage={HeroImage} $w="100%" $ai='center' style={{position:'relative'}}>
          <div style={{position:"absolute", background:'#000c', width:'100%', height:'100%'}}></div>
          <Box $flex $fd="column" $pd="10rem" $ai='center' $gap="10px" $w="80%" $mg="auto" style={{zIndex: 1000}}>
            <Heading $size='xxlg' $color='#eee'> Krypto <Text as='span' $color={dark.primary} $size="xxlg" weight={900}>IQ</Text></Heading>
            <Text $align="center" $size="lg" $color='#eee' $width="70%">We are here to help you make money while you are catching all the fun on this exciting crypto space</Text>
            <Button $large $size="md" $bgColor={dark.primary} $color='#111'> Learn More... </Button>
          </Box>
        </Box>

        {/*Vision and Mission Section */}
        <Box $flex $jc="center" $ai="center" $w="100%" $pd="4rem" style={{position:'relative', height:'80vh'}} >
          <Image style={{position:"absolute", margin:"auto", zIndex:20}} src={Kiqgoal} $width='500px' $height='auto' />
          <Box $flex $fd="column" $gap="20px" $jc='center' $square="30rem"$pd="0 0 0 2rem" style={{zIndex:10}} className='aboutFloatsBox'>
            <FaFlag size={30} color="#aaa" style={{alignSelf:"center"}}/>
            <Text $size="xlg" $color={light.bgColor} $weight="400">To build a community of crypto enthusiasts with good knowledge of crypto</Text>
            <Heading $size="lg"><span style={{fontSize:"1rem"}}>The</span> Mission</Heading>
          </Box>
          <Box $flex $jc='center' $gap="20px" $fd="column"  $square="25rem" $pd="0 1rem 0 2rem" style={{zIndex:10}}>
            <FaEye size={30} color="#aaa" />
            <Text $size="xlg" $color={light.bgColor} $weight="400">To be the largest cryptolearn to earn platform</Text>
            <Heading $size="lg" $color="#111"><span style={{fontSize:"1rem"}}>The</span> Vision</Heading>
          </Box>
        </Box>

        {/* Join Section */}
      <Box $flex $pd="10rem 8rem 12rem 8rem" $ai="center" $bgColor="black">
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
        
        <Box $flex $jc="left" $w="70%">
          <Image $rot="15deg" $width="250px" $height="auto" src={BrainBulb}/>
        </Box>
      </Box>

        {/* How it Works Section */}
      <Box style={{position:'relative'}} $bgColor={light.bgColor} $pd="4rem" className="top-divider">
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

export default About

export const Head = () => <title>About KIQ</title>