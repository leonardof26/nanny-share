import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { FutureFeatures } from '.'

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

describe('FutureFeatures component', () => {
  it('Renders correctly', () => {
    mockAllIsIntersecting(true)

    render(<FutureFeatures />)

    expect(
      screen.getByRole('heading', {
        name: /Coming soon: Nanny Share Daily Diary!/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /with the hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day\. you and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones\. we can’t wait!/i
      )
    ).toBeInTheDocument()

    expect(screen.getByAltText(/devices running the app/i)).toBeInTheDocument()
  })
})
