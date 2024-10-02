import './App.css'
import LandingPage from './LandingPage.jsx'
import Navbar from './components/Navbar.jsx'
import AboutMe from './AboutMe.jsx'
import { Box } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutMe />
    </>
  )
}

export default App
