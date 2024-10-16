import React from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'

import LandingPage from './components/LandingPage.jsx'
import AboutMe from './components/AboutMe.jsx'
import Resume from './components/Resume.jsx'

import { Box } from '@chakra-ui/react'

function App() {

  return (
    <Box bgColor='#090909'>
      <Navbar />
      <LandingPage />
      <Resume />
      <AboutMe />
    </Box>
  )
}

export default App
