import { Container } from './styles'

import { Register } from './Register'
import { SiteInfo } from './SiteInfo'
import { Copyright } from './Copyright'

function Footer() {
  return (
    <Container>
      <Register />
      <SiteInfo />
      <Copyright />
    </Container>
  )
}

export { Footer }
