import Landing from './pages/Landing'
import Navbar from '@/components/Navbar'

import { Box } from '@chakra-ui/react'

import './App.css'

function App() {
  return (
    <Box w="100vw" h="100vh">
      <Navbar/>
      <Landing/>

      <div class="blob-outer-container">
        <div class="blob-inner-container">
          <div class="blob blob-purple"></div>
          <div class="blob blob-red"></div>
          <div class="blob blob-yellow"></div>
        </div>
      </div>
    </Box>
  )
}

export default App
