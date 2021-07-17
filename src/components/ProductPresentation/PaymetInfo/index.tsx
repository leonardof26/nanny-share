import { Container, Info } from './styles'

import paymentOptions from '../../../assets/images/paymentOptions.png'
import { ExternalLink } from '../../ExternalLink'

function PaymentInfo() {
  return (
    <Container>
      <img src={paymentOptions} alt="payment Menu" />

      <Info>
        <h1>Shared payments made simple</h1>
        <p>
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing
          that bill week in, week out and you might encounter more than a few
          snares. But not with Hapu. Simply set your rates and our automated
          payment system takes care of the rest. You need never talk money or
          who owes what.
        </p>
        <ExternalLink color="purple" href="#">
          Read how Bridget’s share (without Hapu) ended over $15
        </ExternalLink>
      </Info>
    </Container>
  )
}

export { PaymentInfo }
