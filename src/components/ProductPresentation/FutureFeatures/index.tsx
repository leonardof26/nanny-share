import { useEffect } from 'react'

import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Container } from './styles'

import devices from '../../../assets/images/devices.png'

function FutureFeatures() {
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
      <img src={devices} alt="devices running the app" />
      <h1>Coming soon: Nanny Share Daily Diary!</h1>
      <p>
        With the Hapu daily diary your nanny will be able to update you and your
        sharers with photos and commentary of the day. You and sharers will
        receive notifications and you’ll be able to login to view the daily
        adventures fo your little ones. We can’t wait!
      </p>
    </Container>
  )
}

export { FutureFeatures }
