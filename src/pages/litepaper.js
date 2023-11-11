import React from 'react'
import Layout from '../components/Layout'
import { Heading } from '../components/Styled'
import { useTheme } from 'styled-components'


const Litepaper = () => {
  return (
    <Layout>
      <LitepaperPage />
    </Layout>
  )
}

const LitepaperPage = () => {
  const themed = useTheme();
  const { light, dark } = themed;
  return (
      <Heading $size="xxlg" $color={dark.bgColor}>Litepaper Page Under Construction</Heading>
  )
}

export default Litepaper


export const Head = () => <title>Litepaper</title>