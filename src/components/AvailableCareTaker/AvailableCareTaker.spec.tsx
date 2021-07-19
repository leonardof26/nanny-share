import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { AvailableCareTaker } from '.'

describe('AvailableCareTaker component', () => {
  it('Renders correctly', () => {
    render(<AvailableCareTaker />)

    expect(
      screen.getByText('Sarah’s day care available now in North Sydney')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Wednesday, Thursday, Friday - 7:30 - 5:30')
    ).toBeInTheDocument()
  })
})
