import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup } from '@testing-library/react'

import { Link } from '.'

describe('Link component', () => {
  it('Renders correctly', () => {
    render(<Link color="grey">Test</Link>)

    expect(screen.getByText('Test')).toBeInTheDocument()
  })
  it('Passes its color correctly', () => {
    render(<Link color="grey">Test</Link>)

    expect(screen.getByText('Test')).toHaveAttribute('color', 'grey')

    cleanup()

    render(<Link color="white">Test</Link>)

    expect(screen.getByText('Test')).toHaveAttribute('color', 'white')
  })
})
