import { Container } from './styles'

import { Introduction } from './Introduction'
import { Subscription } from './Subscription'
import { PaymentInfo } from './PaymetInfo'
import { AppPrinciples } from './AppPrinciples'
import { FutureFeatures } from './FutureFeatures'

type User = {
  name: string
  email: string
}

type HandleSubmitFunction = {
  user: User
  reset: () => void
}

interface ProductPresentationProps {
  loading: boolean
  handleSubscribeToNewsletter: ({ user, reset }: HandleSubmitFunction) => void
}

function ProductPresentation({
  loading,
  handleSubscribeToNewsletter,
}: ProductPresentationProps) {
  return (
    <Container>
      <Introduction />
      <Subscription
        loading={loading}
        handleSubscribeToNewsletter={handleSubscribeToNewsletter}
      />
      <PaymentInfo />
      <AppPrinciples />
      <FutureFeatures />
    </Container>
  )
}

export { ProductPresentation }
