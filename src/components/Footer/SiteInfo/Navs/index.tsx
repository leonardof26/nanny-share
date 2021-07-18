import { Container } from './styles'

import { Link } from '../../../Link'

function Navs() {
  return (
    <Container>
      <Link href="_" color="grey">
        Share Your Nanny
      </Link>
      <Link href="_" color="grey">
        Our Story
      </Link>
      <Link href="_" color="grey">
        Blog
      </Link>
      <Link href="_" color="grey">
        Terms & Privacy
      </Link>
    </Container>
  )
}

export { Navs }
