import { Container } from './styles'

import { Introduction } from './Introduction'
import { Subscription } from './Subscription'
import { PaymentInfo } from './PaymetInfo'
import { AppPrinciples } from './AppPrinciples'
import { FutureFeatures } from './FutureFeatures'

function ProductPresentation() {
  return (
    <Container>
      <Introduction />
      <Subscription />
      <PaymentInfo />
      <AppPrinciples />
      <FutureFeatures />
    </Container>
  )
}

export { ProductPresentation }
