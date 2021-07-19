import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('Logo component', () => {
  it('Renders correctly', () => {
    render(<Logo />)

    expect(
      screen.getByRole('img', { name: /Nanny Share/i })
    ).toBeInTheDocument()
  })
})
