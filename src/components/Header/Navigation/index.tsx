import { Container } from './styles'

import { Link } from '../../Link'

function Navigation() {
  return (
    <Container>
      <Link href="_" color="white">
        Create Your Nanny Share
      </Link>
      <Link href="_" color="white">
        Browse Shares
      </Link>
      <Link href="_" color="white">
        Our Story
      </Link>
    </Container>
  )
}

export { Navigation }
