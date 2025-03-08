
import './App.css'
import Home from './pages/Home'
import { ThemeProvider } from "@/components/theme-provider"
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div> 
          <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
