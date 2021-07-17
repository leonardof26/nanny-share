import { Container } from './styles'

import profileImage from '../../assets/images/ProfileImage.png'
import { ExternalLink } from '../ExternalLink'

function AvailableCareTaker() {
  return (
    <Container>
      <img src={profileImage} alt="Sarah" />
      <ExternalLink color="purple" href="blank">
        Sarah’s day care available now in North Sydney
      </ExternalLink>
      <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
    </Container>
  )
}

export { AvailableCareTaker }
