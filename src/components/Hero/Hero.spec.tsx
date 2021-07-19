import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Hero } from '.'

describe('Hero component', () => {
  it('Renders correctly model A', () => {
    render(<Hero />)

    screen.getByAltText(/family with children on kitchen/i)
  })
})
