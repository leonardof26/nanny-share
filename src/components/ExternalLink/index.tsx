import React from 'react'

import { Container } from './styles'

interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color: 'purple' | 'white'
}

function ExternalLink({ color, children, ...rest }: ExternalLinkProps) {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  )
}

export { ExternalLink }
