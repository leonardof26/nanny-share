import React from 'react'

import { Container } from './styles'

function Link({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <Container {...rest}>{children}</Container>
}

export { Link }
