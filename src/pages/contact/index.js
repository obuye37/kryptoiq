import React from 'react'
import { FaEnvelope, FaTelegram, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'


import { Elink, Box, theme } from '../../components/Styled'


const Contacts = () => {
  const { light, dark } = theme;
  return (
    <>
      <Box $flex $fd="column" $gap="2rem" $pd="8rem 1rem">
        <Box as={motion.div} $flex>
          <FaTwitter  size={80} color='#00acee' />
          <Elink $italize href='https://x.com/kryptoiq' $color={light.fgColor} $size="lg">x.com/kryptoiq</Elink>
        </Box>

        <Box $flex>
          <FaTelegram size={80} color='#0088cc'/>
          <Elink $italize href='https://t.me/kryptoiq_official' $size="lg" $color={light.fgColor}>t.me/krypto_iq_official</Elink>
        </Box>
        <Box $flex $ai="center">
          <FaEnvelope size={80} color='#00accc' />
          <div>
            <Elink $italize href='mailto:support@kryptoiq.net' $color={light.fgColor} $size="lg">support@kryptoiq.net</Elink>
            <Elink $italize href='mailto:kryptoiq@gmail.com' $color={light.fgColor} $size="lg">kryptoiq@gmail.com</Elink>
          </div>
        </Box>
        
        
      </Box>
    </>
      
  )
}

export default Contacts

export const Head = () => <title>Contacts</title>