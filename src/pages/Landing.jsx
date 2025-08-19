import {
  Flex,
  Container,
  Image,
  Heading,
  Button,} from '@chakra-ui/react'
import React from 'react'

function Landing() {

  const overlay = document.querySelector('.overlay');
  const button = document.getElementById('btn');

  document.addEventListener('mousemove', (e) => {
    if (!overlay.classList.contains('fade-out')) {
      overlay.style.setProperty('--x', `${e.clientX}px`);
      overlay.style.setProperty('--y', `${e.clientY}px`);
    }
  });

  return (
    <Flex>
      <Container className='bg-container'>
        <Image src="./landing-background.png"></Image>
      </Container>
      
      <Flex className='overlay'></Flex>

      <Flex className='title-container'>
        <Heading className='title'>Joanne Andriamahandry</Heading>
        <Button id='btn'>Enter</Button>
      </Flex>
    </Flex>
  )
}

export default Landing