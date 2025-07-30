import { 
    AbsoluteCenter,
    Heading,
    Text,
    Flex,
    Button
 } from '@chakra-ui/react'

 import { GoArrowRight } from "react-icons/go";

import React from 'react'

function Hero() {
  return (
    <AbsoluteCenter w="48vw">
        <Flex direction="column" gap={16}>
            <Flex direction="column" gap={2}>
                <Heading as="h1" className='hero-title' m="1.6rem" letterSpacing={2} fontSize="3.6em">Joanne Andriamahandry</Heading>
                <Text className='regular-text' fontSize="1.2em">A computer science and design student fascinated by Nature.</Text>
            </Flex>
            
            <Button className='hero-btn' size="sm" variant="outline" animation="bounce" _hover={{bgColor: "#fff", color: "#10031A"}}>START <GoArrowRight/></Button>
        </Flex>
        
    </AbsoluteCenter>
  )
}

export default Hero