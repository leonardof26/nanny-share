import { Container } from './styles'

import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { SignIn } from './SignIn'

function Header() {
  return (
    <Container>
      <Logo />

      <Navigation />

      <SignIn />
    </Container>
  )
}

export { Header }
