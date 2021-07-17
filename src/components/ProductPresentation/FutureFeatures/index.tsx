import { Container } from './styles'

import devices from '../../../assets/images/devices.png'

function FutureFeatures() {
  return (
    <Container>
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
