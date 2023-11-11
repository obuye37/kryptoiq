import React from 'react'
import Layout from '../components/Layout'
import { Heading } from '../components/Styled'
import { useTheme } from 'styled-components'


const About = () => {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  )
}

const AboutPage = () => {
  const themed = useTheme();
  const { light, dark } = themed;
  return (
      <Heading $size="xxlg" $color={dark.bgColor}>About Page Under Construction</Heading>
  )
}

export default About

export const Head = () => <title>About KIQ</title>