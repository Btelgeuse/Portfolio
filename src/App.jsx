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
        <Navbar />

        <Routes>
          <Route path="/Portfolio/" element={<Landing />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/skills" element={<Skills />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
          <Route path="/Portfolio/labs" element={<Labs />} />
        </Routes>

        <Footer />

        <div className="blob-outer-container">
          <div className="blob-inner-container">
            <div className="blob blob-purple"></div>
            <div className="blob blob-red"></div>
            <div className="blob blob-yellow"></div>
          </div>
        </div>
      </Box>
    </BrowserRouter>
  )
}

export default App