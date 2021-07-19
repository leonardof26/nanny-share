import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Input } from '.'

describe('Input component', () => {
  it('Renders correctly', () => {
    render(<Input />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
