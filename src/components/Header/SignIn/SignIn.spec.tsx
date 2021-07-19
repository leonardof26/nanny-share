import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { SignIn } from '.'

describe('SignIn component', () => {
  it('Renders correctly', () => {
    render(<SignIn />)

    expect(
      screen.getByRole('button', { name: /Become a Nanny Share Host/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
  })
})
