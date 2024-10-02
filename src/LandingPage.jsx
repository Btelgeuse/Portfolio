import React from 'react'
import {
  Center,
  Flex,
  Box,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react'

function LandingPage() {
  return (
      <Box h='100vh' border='1px solid'>  
        <Center w='100%' h='100%'>
          <Flex flexDirection='column'>
            <Text textAlign='center'>Hi ! I am</Text>
            <Heading as='h1' textAlign='center'>BETELGEUSE</Heading>
            <Text textAlign='center'>and I am a student in...</Text>
            <Center p={6}>
              <Button m={2}>Design</Button>
              <Button m={2}>Computer science</Button>
            </Center>
          </Flex>
        </Center>
      </Box>
  )
}

export default LandingPage