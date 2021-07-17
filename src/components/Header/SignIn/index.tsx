import { Container } from './styles'

import { Button } from '../../Button'
import { Link } from '../Link'

function SignIn() {
  return (
    <Container>
      <Button type="button">Become a Nanny Share Host</Button>

      <Link href="blank">Sign In</Link>
    </Container>
  )
}

export { SignIn }
