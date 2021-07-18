import { useEffect } from 'react'

import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { ExternalLink } from '../../ExternalLink'

import billingHistory from '../../../assets/images/billingHistory.png'

import { Container } from './styles'

function AppPrinciples() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <Container
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 1.5 }}
    >
      <h1>A framework built for the long term</h1>
      <p>
        Childcare is for the long term. And you need a framework you can count
        on that gives your share long term viability and success. That’s why
        we’ve defined Hapu around our three tribal principles; clearly defined
        process, transparency over money and equality of participation.
      </p>
      <ExternalLink color="purple" href="#">
        Read how Hapu’s tribal background defines our app{' '}
      </ExternalLink>
      <img src={billingHistory} alt="Billing History" />
    </Container>
  )
}

export { AppPrinciples }
