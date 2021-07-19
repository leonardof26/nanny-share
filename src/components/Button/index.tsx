import React from 'react'
import { FaSpinner } from 'react-icons/fa'

import { Container } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {!loading && children}
      {loading && <FaSpinner />}
    </Container>
  )
}

export { Button }

Button.defaultProps = {
  loading: false,
}
