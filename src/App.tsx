import { GlobalStyle } from './styles/global'

import { Cover } from './components/Cover'
import { AvailableCareTaker } from './components/AvailableCareTaker'
import { ProductPresentation } from './components/ProductPresentation'

function App() {
  return (
    <>
      <Cover />

      <AvailableCareTaker />

      <ProductPresentation />

      <GlobalStyle />
    </>
  )
}

export default App
