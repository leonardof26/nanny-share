import React from 'react'

import { FieldError } from 'react-hook-form'

import { Container } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
}

function Input({ error, ...rest }: InputProps) {
  return <Container error={!!error} {...rest} />
}

export { Input }

Input.defaultProps = {
  error: null,
}
