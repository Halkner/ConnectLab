import { Logo } from "./components/atoms/Logo"
import { Title } from "./components/atoms/Title"
import { Button } from "./components/atoms/Button"
import { GlobalStyles } from "./styles/GlobalStyles"


function App() {

  return (
    <div className="App">
      <GlobalStyles/>
      <Logo/>
      <Title text="Connect Lab"/>
      <Button text="Login"/>
    </div>
  )
}

export default App