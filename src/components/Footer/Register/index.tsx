import { Container } from './styles'

import { RegisterButton } from './RegisterButton'
import { ExternalLink } from '../../ExternalLink'

function Register() {
  return (
    <Container>
      <h1>Become a nanny share host</h1>
      <p>Takes less than 5 minutes to get started</p>
      <RegisterButton />
      <ExternalLink color="purple" href="#">
        Or browse local nanny-shares
      </ExternalLink>
    </Container>
  )
}

export { Register }
