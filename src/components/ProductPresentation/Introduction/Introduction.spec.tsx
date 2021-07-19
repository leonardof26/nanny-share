import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Introduction } from '.'

describe('Introduction component', () => {
  it('Renders correctly', () => {
    render(<Introduction />)

    expect(
      screen.getByRole('heading', {
        name: /share your home, nanny and costs/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /you have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic\?! if only it was easy to connect with other parents to share your costs\? well now it is, with hapu\. and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe\. a tribe that together has the power to create new affordable solutions in childcare that work for you and your community\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /ready to get started\?/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByAltText(/pricing layout/i)).toBeInTheDocument()
  })
})
