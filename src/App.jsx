import React from 'react'

import './App.css'
import LandingPage from './LandingPage.jsx'
import About from './About.jsx'
import Resume from './Resume.jsx'

import { useHorizontalScroll } from './HorizontalScroll'

import {
  Flex,
} from '@chakra-ui/react'

function App() {
  const scrollRef = useHorizontalScroll();

  return (
    <Flex
      h="100vh"
      w='100vw'
      flexDirection='row'
      ref={scrollRef}
      overflowX="auto"
      overflowY='hidden'
      whiteSpace='nowrap'
    >
      <LandingPage />
      <Resume />
      <About />
    </Flex>
  )
}

export default App