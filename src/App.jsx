import { GlobalStyles } from "./styles/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./components/routes/Router"
import { ModalProvider } from "./contexts/Modal/ModalProvider"
import { AuthenticationProvider } from "./contexts/Authentication/AuthenticationProvider"


function App() {

  return (
    <ModalProvider>
      <BrowserRouter>
        <AuthenticationProvider>
          <GlobalStyles/>
          <Router/>
        </AuthenticationProvider>
      </BrowserRouter>
    </ModalProvider>
  )
}

export default App