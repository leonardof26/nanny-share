import { ExternalLink } from '../../ExternalLink'
import { Container, Info } from './styles'

import priceComponent from '../../../assets/images/priceComponent.png'

function Introduction() {
  return (
    <Container>
      <Info>
        <h1>
          Share your home, <br /> nanny and costs
        </h1>
        <p>
          You have a fantastic home, a fantastic nanny and wouldn’t cutting your
          costs in half be, well, fantastic?! If only it was easy to connect
          with other parents to share your costs? Well now it is, with Hapu.{' '}
          <ExternalLink color="purple" href="#">
            Hapu means tribe
          </ExternalLink>{' '}
          and it’s our foundational 3 tribal principles that empowers you to
          create and manage your own tribe. A tribe that together has the power
          to create new affordable solutions in childcare that work for you and
          your community.
        </p>
        <ExternalLink color="purple" href="#">
          Ready to get started?
        </ExternalLink>
      </Info>

      <img src={priceComponent} alt="pricing layout" />
    </Container>
  )
}

export { Introduction }
