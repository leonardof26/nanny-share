import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Header } from '.'

describe('Header component', () => {
  it('Renders correctly', () => {
    render(<Header />)

    expect(
      screen.getByRole('img', { name: /Nanny Share/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/create your nanny share/i)).toBeInTheDocument()
    expect(screen.getByText(/browse shares/i)).toBeInTheDocument()
    expect(screen.getByText(/our story/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Become a Nanny Share Host/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
  })
})
