import React from 'react'
import {
  Flex,
  Box,
  Text,
  Heading,
  IconButton,
  HStack,
} from '@chakra-ui/react'

function LandingPage() {
  return (
      <Flex h='100vh' paddingTop={32} >
        <Box width='90%' height='95%' mx='auto'>
          <Box bg="rgba(255, 255, 255, 0.1)" width='100%' height='70%' borderRadius={40} borderBottomLeftRadius='0px' borderBottomRightRadius='0px'>
          </Box>
          <Flex>
            <Box w='50%'>
              <Heading as='h1' my={3} letterSpacing='0.4em' fontSize='3rem'>BETELGEUSE</Heading>
              <Text letterSpacing='0.1em'>Computer science and design student...</Text>
            </Box>
            <Box w='50%' textAlign='right'>
              <Text fontFamily='"Libre Barcode 39 Text", system-ui' fontSize='2.5rem' my={4}>Social media</Text>
              <Flex justifyContent='end'>
                <HStack spacing={14}>
                  <IconButton></IconButton>
                  <IconButton></IconButton>
                  <IconButton></IconButton>
                </HStack>
                
              </Flex>
            </Box>
          </Flex>
          
        </Box>
      </Flex>
  )
}

export default LandingPage