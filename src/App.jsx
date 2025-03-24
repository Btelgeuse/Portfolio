import Landing from './pages/Landing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { Box } from '@chakra-ui/react'

import './App.css'

function App() {
  return (
    <Box w="100vw" h="100vh">
      <Navbar/>
      <Landing/>
      <Footer/>

      <div className="blob-outer-container">
        <div className="blob-inner-container">
          <div className="blob blob-purple"></div>
          <div className="blob blob-red"></div>
          <div className="blob blob-yellow"></div>
        </div>
      </div>
    </Box>
  )
}

export default App