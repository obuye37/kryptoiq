import React from 'react'
import Layout from '../../components/Layout'
import { Heading } from '../../components/Styled'
import { useTheme } from 'styled-components'


// const Blog = () => {
//   return (
//     <Layout>
//       <BlogPage />
//     </Layout>
//   )
// }

const Blog = () => {
  const themed = useTheme();
  const { light, dark } = themed;
  return (
      <Heading $size="xxlg" $color={dark.bgColor}>Blog Page Under Construction</Heading>
  )
}

export default Blog

export const Head = () => <title>Blog</title>