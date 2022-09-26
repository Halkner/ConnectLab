import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContextProvider"
import { Layout } from "./layout/Layout"


function App() {

  return (
    <ThemeContextProvider>
      <Layout/>
    </ThemeContextProvider>
  )
}

export default App