import {
  Flex,
  Container,
  Image,
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

      <Flex className='title-container'>
        <Heading className='title'>Joanne Andriamahandry</Heading>
        <Button className='btn'>Enter</Button>
      </Flex>
    </Flex>
  )
}

export default Landing