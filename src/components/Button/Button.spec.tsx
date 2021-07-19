import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('Button component', () => {
  it('Renders correctly', () => {
    render(<Button>Test</Button>)

    expect(screen.getByText('Test')).toBeInTheDocument()
  })
  it('Renders spinnner when loading', () => {
    const { container } = render(<Button loading={true}>Test</Button>)

    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
