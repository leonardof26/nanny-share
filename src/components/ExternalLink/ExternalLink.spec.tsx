import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup } from '@testing-library/react'

import { ExternalLink } from '.'

describe('Button component', () => {
  it('Renders correctly', () => {
    render(<ExternalLink color="purple">Test</ExternalLink>)

    expect(screen.getByText('Test')).toBeInTheDocument()
  })
  it('Applys the correct color to link', () => {
    render(<ExternalLink color="purple">Test</ExternalLink>)

    expect(screen.getByText('Test')).toHaveAttribute('color', 'purple')

    cleanup()

    render(<ExternalLink color="white">Test</ExternalLink>)

    expect(screen.getByText('Test')).toHaveAttribute('color', 'white')
  })
})
