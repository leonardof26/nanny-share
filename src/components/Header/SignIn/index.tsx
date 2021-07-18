import { Container } from './styles'

import { Button } from '../../Button'
import { Link } from '../../Link'

function SignIn() {
  return (
    <Container>
      <Button type="button">Become a Nanny Share Host</Button>

      <Link href="_" color="white">
        Sign In
      </Link>
    </Container>
  )
}

export { SignIn }
