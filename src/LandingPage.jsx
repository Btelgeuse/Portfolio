import React from 'react'
import {
  AbsoluteCenter,
  Center,
  Flex,
  Box,
  Text,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'

function LandingPage() {
  return (
    <>
      <Box w='100vw' h='100vh'>
        <AbsoluteCenter axis='both'>
          <Flex flexDirection='column'>
            <Text textAlign='center'>Hi ! I am</Text>
            <Heading as='h1' textAlign='center'>BETELGEUSE</Heading>
            <Text textAlign='center'>I am a computer science and design student based in Paris.</Text>
            <Center>
              <IconButton borderRadius={40} w={5} m={12} icon={<ArrowDownIcon/>}></IconButton>
            </Center>
          </Flex>
        </AbsoluteCenter>
      </Box>
      
    </>
  )
}

export default LandingPage