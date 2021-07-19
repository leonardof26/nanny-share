import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { CompanyInfo } from '.'

describe('CompanyInfo component', () => {
  it('Renders correctly model A', () => {
    render(<CompanyInfo model="A" />)

    expect(
      screen.getByRole('heading', {
        name: /easily create or join a local nanny share with hapu/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /hapu is airbnb for nanny share\. share your home, nanny and costs and create new flexible, affordable solutions in childcare\./i
      )
    ).toBeInTheDocument()
    screen.getByRole('link', {
      name: /see hapu in action \(27 seconds\)/i,
    })
    screen.getByAltText(/manage account option/i)
  })
  it('Renders correctly model B', () => {
    render(<CompanyInfo model="B" />)

    expect(
      screen.getByRole('heading', {
        name: /create the childcare you need at a price you can afford/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /connect with other local families to share a nanny from as low as \$10\.00\/hr each\. create your family profile today to get started/i
      )
    ).toBeInTheDocument()
    screen.getByRole('link', {
      name: /see hapu in action \(27 seconds\)/i,
    })
    screen.getByAltText(/manage account option/i)
  })
})
