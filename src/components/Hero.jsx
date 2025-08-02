import { 
    AbsoluteCenter,
    Heading,
    Text,
    Flex,
    Button
 } from '@chakra-ui/react'

 import { Link as RouterLink } from "react-router-dom";

 import { GoArrowDown } from "react-icons/go";

import React from 'react'

function Hero() {
  return (
    <Flex justify="center" align="center">
        <Flex direction="column" gap={16} w="clamp(20rem, 80vw, 60rem)">
            <Flex direction="column" gap={2}>
                <Heading as="h1" className='hero-title' m="1.6rem" letterSpacing={2} fontSize="clamp(1.5rem, 4vw, 3rem)">Joanne Andriamahandry</Heading>
                <Text className='regular-text' fontSize="clamp(1.2rem, 2vw, 1.2rem)">A computer science and design student fascinated by Nature.</Text>
            </Flex>
            
            <Button className='hero-btn'
            w={4}
            variant="outline"
            animation="bounce"
            _hover={{bgColor: "#fff", color: "#10031A"}}
            as={RouterLink}
            to="/Portfolio/about"><GoArrowDown fontSize="clamp(0.9rem, 1.5vw, 1.2rem)"/></Button>
        </Flex>
        
    </Flex>
  )
}

export default Hero