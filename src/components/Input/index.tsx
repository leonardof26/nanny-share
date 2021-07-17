import React from 'react'

import { Container } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

function Input({ error, ...rest }: InputProps) {
  return <Container error={error} {...rest} />
}

export default Input

Input.defaultProps = {
  error: false,
}
