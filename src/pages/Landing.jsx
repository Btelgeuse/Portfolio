import {
  Flex,
  Container,
  Image,
  Heading,
  Button,} from '@chakra-ui/react'
import {React, useEffect} from 'react'

function Landing() {

  // const overlay = document.querySelector('.overlay');
  // const button = document.getElementById('btn');

  useEffect(() => {
    document.documentElement.style.setProperty('--x', '50vw');
    document.documentElement.style.setProperty('--y', '50vh');

    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

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