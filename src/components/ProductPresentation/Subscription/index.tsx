import { Container } from './styles'

import Input from '../../Input'
import { Button } from '../../Button'

function Subscription() {
  return (
    <Container>
      <h1>Are you a parent without a nanny and looking to share?</h1>
      <span>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </span>
      <form>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Best Email" />
        <Button type="submit">Send</Button>
      </form>
    </Container>
  )
}

export { Subscription }
