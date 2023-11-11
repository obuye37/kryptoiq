import React from 'react'
import Layout from '../components/Layout'
import { Heading } from '../components/Styled'
import { useTheme } from 'styled-components'

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
      <Heading $size="xxlg" $color={dark.bgColor}>Contact Page Under Construction</Heading>
  )
}

export default Contacts

export const Head = () => <title>Contacts</title>