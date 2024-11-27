import React from 'react'

import './App.css'
import LandingPage from './LandingPage.jsx'
import About from './About.jsx'
import { useHorizontalScroll } from './HorizontalScroll'

import {
  Box
} from '@chakra-ui/react'

function App() {
  const scrollRef = useHorizontalScroll();

  return (
    <Box
      h="100vh"
      w='200vw'
      display="flex"
      flexDirection="row"
      ref={scrollRef}
      overflow='auto'
    >
      <LandingPage />
      <About />
    </Box>
  )
}

export default App