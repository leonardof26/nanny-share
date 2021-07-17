import React from 'react'

import { Container } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

function Button({ children, ...rest }: ButtonProps) {
  return <Container {...rest}>{children}</Container>
}

export { Button }

Button.defaultProps = {
  loading: false,
}
