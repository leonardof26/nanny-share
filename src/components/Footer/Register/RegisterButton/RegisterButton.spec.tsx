import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { RegisterButton } from '.'

describe('RegisterButton component', () => {
  it('Renders correctly', () => {
    render(<RegisterButton />)

    expect(screen.getByText('Create Your Nanny Share')).toBeInTheDocument()
    expect(screen.getByText('Takes less than 5 minutes')).toBeInTheDocument()
  })
})
