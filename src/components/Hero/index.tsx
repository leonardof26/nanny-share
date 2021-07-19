import { Container, Background } from './styles'

import cover from '../../assets/images/cover.png'
import { Header } from '../Header'
import { CompanyInfo } from './CompanyInfo'

function Hero() {
  return (
    <Container>
      <Background src={cover} alt="family with children on kitchen" />

      <Header />

      <CompanyInfo model="A" />
    </Container>
  )
}

export { Hero }
