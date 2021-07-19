import { FaPlay } from 'react-icons/fa'

import { Container, Info, CompanyVideo } from './styles'

import { ExternalLink } from '../../ExternalLink'

import manageOptionImg from '../../../assets/images/manageOption.png'

interface CompanyInfoProps {
  model: 'A' | 'B'
}

function CompanyInfo({ model }: CompanyInfoProps) {
  return (
    <Container>
      <Info>
        {model === 'A' ? (
          <h1>
            Easily create or join a local <br /> nanny share with Hapu
          </h1>
        ) : (
          <h1>Create the childcare you need at a price you can afford</h1>
        )}
        {model === 'A' ? (
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
          </p>
        ) : (
          <p>
            Connect with other local families to share a nanny from as low as
            $10.00/hr each. Create your family profile today to get started
          </p>
        )}

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
