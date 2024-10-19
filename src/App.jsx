import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar.jsx'

import LandingPage from './components/LandingPage.jsx'
import AboutMe from './components/AboutMe.jsx'
import Resume from './components/Resume.jsx'

import { Box } from '@chakra-ui/react'

function App() {

  return (
    
    <Box bgColor='#090909'>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
      <Navbar />
      <Resume />
      <AboutMe />
    </Box>
  )
}

export default App
