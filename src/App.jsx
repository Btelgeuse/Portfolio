import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import Landing from './pages/Landing'
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Labs from './pages/Labs';

import { Box } from '@chakra-ui/react'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Box w="100vw" h="100vh">
        <Landing />

        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>

      </Box>
    </BrowserRouter>
  )
}

export default App