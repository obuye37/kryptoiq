import React from 'react'
import { Heading } from '../../components/Styled'
import { useTheme } from 'styled-components'


const Litepaper = () => {
  const themed = useTheme();
  const { light, dark } = themed;
  return (
      <Heading $size="xxlg" $color={dark.bgColor}>Litepaper Page is Under Construction</Heading>
  )
}

export default Litepaper


export const Head = () => <title>Litepaper</title>