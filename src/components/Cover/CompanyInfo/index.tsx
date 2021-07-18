import { FaPlay } from 'react-icons/fa'

import { Container, Info, CompanyVideo } from './styles'

import { ExternalLink } from '../../ExternalLink'

import manageOptionImg from '../../../assets/images/manageOption.png'

function CompanyInfo() {
  return (
    <Container>
      <Info>
        <h1>
          Easily create or join a local <br /> nanny share with Hapu
        </h1>
        <p>
          Hapu is Airbnb for nanny share. Share your home, nanny and costs and
          create new flexible, affordable solutions in childcare.
        </p>

        <CompanyVideo>
          <div>
            <FaPlay />
          </div>

          <ExternalLink color="white" href="blank">
            See hapu in Action (27 seconds)
          </ExternalLink>
        </CompanyVideo>
      </Info>

      <img src={manageOptionImg} alt="manage account option" />
    </Container>
  )
}

export { CompanyInfo }
