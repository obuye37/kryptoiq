import React from 'react'
import { Heading, theme} from '../../components/Styled'


const Litepaper = () => {
  const { light, dark } = theme;
  return (
      <Heading $size="xxlg" $color={dark.bgColor}>Litepaper Page is Under Construction</Heading>
  )
}

export default Litepaper


export const Head = () => <title>Litepaper</title>