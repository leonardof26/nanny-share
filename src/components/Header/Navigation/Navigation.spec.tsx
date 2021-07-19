import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Navigation } from '.'

describe('Navigation component', () => {
  it('Renders correctly', () => {
    render(<Navigation />)

    expect(screen.getByText(/create your nanny share/i)).toBeInTheDocument()
    expect(screen.getByText(/browse shares/i)).toBeInTheDocument()
    expect(screen.getByText(/our story/i)).toBeInTheDocument()
  })
})
