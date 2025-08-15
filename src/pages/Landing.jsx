import {
  Flex,
  Container,
  Image,
  AbsoluteCenter,
  Heading,
  Button,} from '@chakra-ui/react'
import React from 'react'

function Landing() {
  return (
    <Flex>
      <Container className='bg-container'>
        <Image src="./landing-background.png"></Image>
      </Container>
      
      <Flex className='overlay'></Flex>

      <AbsoluteCenter>
        <Heading className='title'>Joanne Andriamahandry</Heading>
        <Button className='btn'>Enter</Button>
      </AbsoluteCenter>
    </Flex>
  )
}

export default Landing