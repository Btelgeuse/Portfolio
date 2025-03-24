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
                <Heading as="h1" className='hero-title' letterSpacing={2}>Joanne Andriamahandry</Heading>
                <Text className='regular-text'>A computer science and design student fascinated by Nature.</Text>
            </Flex>
            
            <Button className='hero-btn' size="sm" variant="outline" animation="bounce">START <GoArrowRight/></Button>
        </Flex>
        
    </AbsoluteCenter>
  )
}

export default Hero