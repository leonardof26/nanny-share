import { Container, Info } from './styles'

import calendar from '../../../../assets/images/calendar.svg'

function RegisterButton() {
  return (
    <Container type="button">
      <img src={calendar} alt="calendar" />
      <Info>
        <h1>Create Your Nanny Share</h1>
        <p>Takes less than 5 minutes</p>
      </Info>
    </Container>
  )
}

export { RegisterButton }
