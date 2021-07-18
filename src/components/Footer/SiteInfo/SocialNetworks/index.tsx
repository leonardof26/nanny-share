import { Container, SocialNetworkButton } from './styles'

import facebook from '../../../../assets/images/Facebook.svg'
import twitter from '../../../../assets/images/Twitter.svg'
import instagram from '../../../../assets/images/Instagram.svg'

function SocialNetworks() {
  return (
    <Container>
      <SocialNetworkButton type="button">
        <img src={facebook} alt="facebook" />
      </SocialNetworkButton>
      <SocialNetworkButton type="button">
        <img src={twitter} alt="twitter" />
      </SocialNetworkButton>
      <SocialNetworkButton type="button">
        <img src={instagram} alt="instagram" />
      </SocialNetworkButton>
    </Container>
  )
}

export { SocialNetworks }
