import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Subscription } from '.'

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

describe('Subscription component', () => {
  it('Renders correctly', () => {
    mockAllIsIntersecting(true)

    render(
      <Subscription loading={false} handleSubscribeToNewsletter={jest.fn()} />
    )

    expect(
      screen.getByRole('heading', {
        name: /are you a parent without a nanny and looking to share\?/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /leave us your name and email and we’ll update you as soon as a share becomes available in your area!/i
      )
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Best Email')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /send/i,
      })
    ).toBeInTheDocument()
  })
  it('Does not call submit function on send clicked if field invalids', () => {
    mockAllIsIntersecting(true)

    const handleSubmit = jest.fn()

    render(
      <Subscription
        loading={false}
        handleSubscribeToNewsletter={handleSubmit}
      />
    )
    const sendButton = screen.getByText(/send/i)

    sendButton.click()

    expect(handleSubmit).not.toBeCalled()
  })
})
