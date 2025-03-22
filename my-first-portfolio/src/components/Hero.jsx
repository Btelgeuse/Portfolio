import { 
    AbsoluteCenter,
    Heading,
    Text,
    Flex
 } from '@chakra-ui/react'

import React from 'react'

function Hero() {
  return (
    <AbsoluteCenter bgColor="blue">
        <Flex direction="column">
            <Heading as="h1" letterSpacing={2} fontSize="2em">Joanne Andriamahandry</Heading>
            <Text>A computer science and design student fascinated by Nature.</Text>
        </Flex>
        
    </AbsoluteCenter>
  )
}

export default Hero