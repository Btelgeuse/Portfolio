import Landing from './pages/Landing'
import Navbar from '@/components/Navbar'

import { Box } from '@chakra-ui/react'

import './App.css'

function App() {
  return (
    <Box w="100vw" h="100vh">
      <Navbar/>
      <Landing/>
    </Box>
  )
}

export default App
