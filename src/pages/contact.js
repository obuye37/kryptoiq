import React from 'react'
import Layout from '../components/Layout'
import { Elink, Box, Heading } from '../components/Styled'
import { useTheme } from 'styled-components'
import { FaEnvelope, FaTelegram, FaTwitter } from 'react-icons/fa'

const Contacts = () => {
  return (
    <Layout>
      <ContactsPage />
    </Layout>
  )
}

const ContactsPage = () => {
  const themed = useTheme();
  const { light, dark } = themed;
  return (
    <>
      <Box $flex $fd="column" $gap="2rem" $pd="8rem 1rem">
        <Box $flex>
          <FaTwitter  size={80} color='#00acee' />
          <Elink $italize href='https://x.com/kryptoiq' $color={light.fgColor} $size="xxlg">x.com/kryptoiq</Elink>
        </Box>

        <Box $flex>
          <FaTelegram size={80} color='#0088cc'/>
          <Elink $italize href='https://t.me/kryptoiq_official' $size="xxlg" $color={light.fgColor}>t.me/krypto_iq_official</Elink>
        </Box>
        <Box $flex $ai="center">
          <FaEnvelope size={80} color='#00accc' />
          <div>
            <Elink $italize href='mailto:support@kryptoiq.net' $color={light.fgColor} $size="xxlg">support@kryptoiq.net</Elink>
            <Elink $italize href='mailto:kryptoiq@gmail.com' $color={light.fgColor} $size="xxlg">kryptoiq@gmail.com</Elink>
          </div>
        </Box>
        
        
      </Box>
    </>
      
  )
}

export default Contacts

export const Head = () => <title>Contacts</title>