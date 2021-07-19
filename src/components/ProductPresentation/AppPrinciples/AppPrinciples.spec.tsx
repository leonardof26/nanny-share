import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { AppPrinciples } from '.'

import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

jest.mock('framer-motion', () => {
  return {
    useAnimation: jest.fn(),
    motion: {
      div: require('react').forwardRef(
        ({ children, ...rest }: any, ref: any) => {
          const { whileTap, animate, initial, variants, ...divProps } = rest
          return (
            <div {...divProps} ref={ref}>
              {children}
            </div>
          )
        }
      ),
    },
  }
})

describe('AppPrinciples component', () => {
  it('Renders correctly', () => {
    mockAllIsIntersecting(true)

    render(<AppPrinciples />)

    expect(
      screen.getByRole('heading', {
        name: /a framework built for the long term/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /childcare is for the long term\. and you need a framework you can count on that gives your share long term viability and success\. that’s why we’ve defined hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /read how hapu’s tribal background defines our app/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByAltText(/billing history/i)).toBeInTheDocument()
  })
})
