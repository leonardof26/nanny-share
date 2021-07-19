import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { SocialNetworks } from '.'

describe('SocialNetworks component', () => {
  it('Renders correctly', () => {
    render(<SocialNetworks />)

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
