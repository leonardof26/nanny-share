import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Navs } from '.'

describe('Navs component', () => {
  it('Renders correctly', () => {
    render(<Navs />)

    expect(
      screen.getByRole('link', { name: /share your nanny/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Our Story/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Terms & Privacy/i })
    ).toBeInTheDocument()
  })
})
