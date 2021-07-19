import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { SiteInfo } from '.'

describe('SiteInfo component', () => {
  it('Renders correctly', () => {
    render(<SiteInfo />)

    expect(screen.getByRole('img', { name: /hapu/i })).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /share your nanny/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Our Story/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Terms & Privacy/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /facebook/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /twitter/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /instagram/i,
      })
    ).toBeInTheDocument()
  })
})
