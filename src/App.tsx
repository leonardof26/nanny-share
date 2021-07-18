import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'

import { newsLetter } from './services/api/calls'

import { GlobalStyle } from './styles/global'

import { Cover } from './components/Cover'
import { AvailableCareTaker } from './components/AvailableCareTaker'
import { ProductPresentation } from './components/ProductPresentation'
import { Footer } from './components/Footer'

type User = {
  name: string
  email: string
}

type HandleSubmitFunction = {
  user: User
  reset: () => void
}

function App() {
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSubscribeToNewsletter({
    user,
    reset,
  }: HandleSubmitFunction) {
    setLoading(true)

    try {
      await newsLetter.saveNewUser(user)

      reset()
      toast.success('Subscription confirmed')
    } catch (error) {
      toast.error('Error tryng to subscribe to newsletter')
    }

    setLoading(false)
  }

  return (
    <>
      <Cover />
      <AvailableCareTaker />
      <ProductPresentation
        loading={loading}
        handleSubscribeToNewsletter={handleSubscribeToNewsletter}
      />
      <Footer />

      <GlobalStyle />
      <ToastContainer autoClose={5000} />
    </>
  )
}

export default App
