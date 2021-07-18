import React from 'react'

import { Container } from './styles'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color: 'white' | 'grey'
}

function Link({ children, color, ...rest }: LinkProps) {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  )
}

export { Link }
