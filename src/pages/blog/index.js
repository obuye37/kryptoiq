import React from 'react'
import { Heading,theme } from '../../components/Styled'


const Blog = () => {
  const { light, dark } = theme;
  return (
      <Heading $size="xxlg" $color={dark.bgColor}>Blog Page Under Construction</Heading>
  )
}

export default Blog

export const Head = () => <title>Blog</title>