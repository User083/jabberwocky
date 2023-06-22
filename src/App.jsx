import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero } from './components'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    </BrowserRouter>
  )
}

export default App
