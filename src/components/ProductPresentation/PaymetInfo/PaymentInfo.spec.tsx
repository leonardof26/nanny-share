import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { PaymentInfo } from '.'

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

describe('PaymentInfo component', () => {
  it('Renders correctly', () => {
    mockAllIsIntersecting(true)

    render(<PaymentInfo />)

    expect(
      screen.getByRole('heading', {
        name: /Shared payments made simple/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /sometimes it’s hard enough just sharing a restaurant bill\. try sharing that bill week in, week out and you might encounter more than a few snares\. but not with hapu\. simply set your rates and our automated payment system takes care of the rest\. you need never talk money or who owes what\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /read how bridget’s share \(without hapu\) ended over \$15/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByAltText(/payment menu/i)).toBeInTheDocument()
  })
})
