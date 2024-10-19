import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'

function AboutMe() {
  return (
    <>
      <Flex h='150vh' border='1px solid white' flexDirection='column'>
        <Heading
        as='h2'
        letterSpacing={12}
        textAlign='center'
        my={{ base: '8px', sm: '8px', md: '8px', lg: '56px'}}
        >ABOUT ME</Heading>

        {/* Joanne description */}
        <Box
        border='1px solid red'
        width='90%'
        height='50%'
        mx='auto'
        marginBottom={{ base: '8px', sm: '8px', md: '8px', lg: '56px'}}>
          <Text fontWeight='800' letterSpacing={8} marginTop={32} fontSize='40px'>JOANNE</Text>
          <Text fontWeight='100' letterSpacing='0.1em' fontSize={{ base: '10px', sm: '10px', md: '14px', lg: '16px'}} width='70%'>I've been going to school for 7 years and I don't know what I want to de next but yeah ! I've been going to school for 7 years and I don't know what I want to de next but yeah !</Text>          
        </Box>

        {/* Betelgeuse description */}
        <Box border='1px solid blue' width='90%' height='50%' mx='auto' marginBottom={{ base: '8px', sm: '8px', md: '8px', lg: '56px'}}>
          <Text fontWeight='800' letterSpacing={8} marginTop={32} fontSize='40px'>BETELGEUSE</Text>
          <Text fontWeight='100' letterSpacing='0.1em' fontSize={{ base: '10px', sm: '10px', md: '14px', lg: '16px'}} width='70%'>I've been going to school for 7 years and I don't know what I want to de next but yeah ! I've been going to school for 7 years and I don't know what I want to de next but yeah !</Text>
        </Box>
      </Flex>
    </>
  )
}

export default AboutMe