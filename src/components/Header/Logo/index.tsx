import { Container } from './styles'

import logo from '../../../assets/images/logo.svg'

function Logo() {
  return (
    <Container>
      <img src={logo} alt="Nanny Share" />
    </Container>
  )
}

export { Logo }
