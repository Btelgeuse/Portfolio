import React from 'react'

import {
  Center,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react"

function About() {
  return (
    <Box h="100vh" w="100vw" bgColor="white" display='block' flexShrink="0" id='aboutPage'>
      <Heading color='#222'>About</Heading>
    </Box>
  )
}

export default About