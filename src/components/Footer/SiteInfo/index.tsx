import { Container } from './styles'

import { Navs } from './Navs'
import { SocialNetworks } from './SocialNetworks'

import company from '../../../assets/images/company.svg'

function SiteInfo() {
  return (
    <Container>
      <img src={company} alt="hapu" />

      <Navs />
      <SocialNetworks />
    </Container>
  )
}

export { SiteInfo }
