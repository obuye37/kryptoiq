import * as React from "react"
import { Box, Heading, Text, Button, Image } from '../components/Styled'
import BrainBulb from '../images/iqbrain.svg'
import HeroImage from '../images/hero-img.svg'
import Abg from '../images/iqBg.webp'
import Layout from "../components/Layout"

const IndexPage = () => {
  console.log("BgImage: ", BrainBulb);
  return (
    <Layout>
      <Box $flex $pd="5rem 0" $bgColor="#eee">
        <Box $pd="2rem 8rem">
          <Text $size='sm' $heavy>Welcome to Krypto IQ</Text>
          <Heading $xlg $italize>Learn and Earn in a Fun Way</Heading>
          <Text $size='sm'>Learn and Earn in a fun way</Text>
        </Box>
        <Box $flex $jc="flex-start"  $w="60%">
          <img width={300} height={300} alt='hero image' src={HeroImage} />
        </Box>
      </Box>

    {/* About Section */}
    <Box $flex $bgImage={`${Abg}`} $w="100%" $ai='center' style={{position:'relative'}}>
      <div style={{position:"absolute", background:'#000c', width:'100%', height:'100%'}}></div>
      <Box $flex $fd="column" $pd="10rem" $ai='center' $w="80%" $mg="auto" style={{zIndex: 1000}}>
        <Heading $xlg $color='#eee'> Krypto <Text as='span' $color='yellow' >IQ</Text></Heading>
        <Text $align="center" $size="sm" $color='#eee' $width="70%">We are here to help you make money while you are catching all the fun on this exciting crypto space</Text>
        <Button $small $bgColor='yellow' $color='#111'> Learn More... </Button>
      </Box>
    </Box>

      {/* Join Section */}
      <Box $flex $pd="8rem" $ai="center">
        <Box>
          <Text $align="center">Join Us &</Text>
          <Heading as="h2" $color="#eee">Boost your Crypto Knowledge</Heading>
          {/* <Text>follow</Text><span><FaFacebook /><FaTwitter /></span> */}
        </Box>
        <Box>
          <Image $rot="15deg" $width="250px" $height="auto" src={BrainBulb}/>
        </Box>
      </Box>

      <Box $bgColor="yellow">
        <Heading as='h1'>How it Works</Heading>
        <Box $w="100%" $flex style={{flexWrap:'wrap'}}>
          <Box $w="50%" $pd="4rem" >
            <Box $w='20%'>
              <Heading as="h3" $bgColor="#111" $color="#eee" $pd=".5rem">1. Join</Heading>
            </Box>
            <Text>Begin your earning journey with us by following us on twitter and joining our telegram channel to get updates and learn your way into earning your probably first crypto</Text>
          </Box>
          <Box $w="50%" $pd="4rem">
            <Heading as="h3">2. Learn</Heading>
            <Text>Read our threads, twits and channel updates to get good knowledge and understanding on crypto assets, defi, nft, blockchain and more</Text>
          </Box>
          <Box $w="50%" $pd="4rem">
            <Heading as="h3">3. Play</Heading>
            <Text>Keep Watch and join our learn to earn quiz and competitions, get the right answer while fulfilling all necessities</Text>
          </Box>
          <Box $w="50%" $pd="4rem">
            <Heading as="h3">4. Earn</Heading>
            <Text>Correctly answered our question? Drop your wallet to receive appropriately</Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
