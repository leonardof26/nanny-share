import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Register } from '.'

describe('Register component', () => {
  it('Renders correctly', () => {
    render(<Register />)

    expect(screen.getByText('Become a nanny share host')).toBeInTheDocument()
    expect(
      screen.getByText('Takes less than 5 minutes to get started')
    ).toBeInTheDocument()
    expect(screen.getByText('Create Your Nanny Share')).toBeInTheDocument()
    expect(screen.getByText('Takes less than 5 minutes')).toBeInTheDocument()
    expect(screen.getByText('Or browse local nanny-shares')).toBeInTheDocument()
  })
})
