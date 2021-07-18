import { GlobalStyle } from './styles/global'

import { Cover } from './components/Cover'
import { AvailableCareTaker } from './components/AvailableCareTaker'
import { ProductPresentation } from './components/ProductPresentation'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Cover />

      <AvailableCareTaker />

      <ProductPresentation />

      <Footer />

      <GlobalStyle />
    </>
  )
}

export default App
