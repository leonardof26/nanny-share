import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Copyright } from '.'

describe('Copyright component', () => {
  it('Renders correctly', () => {
    render(<Copyright />)

    expect(
      screen.getByText('Copyright © 2017 Hapu PTY Limited All rights reserved')
    ).toBeInTheDocument()
  })
})
