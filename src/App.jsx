import { GlobalStyles } from "./styles/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./components/routes/Router"
import { ModalProvider } from "./contexts/Modal/ModalProvider"


function App() {

  return (
    <ModalProvider>
      <BrowserRouter>
        <GlobalStyles/>
        <Router/>
      </BrowserRouter>
    </ModalProvider>
  )
}

export default App