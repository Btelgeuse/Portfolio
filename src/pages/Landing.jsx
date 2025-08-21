import {
  Flex,
  Container,
  Image,
  Heading,
  Button,
  Text,
  Link,
  Box,} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import {React, useEffect} from 'react'

function Landing() {

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
        <Text className='description'>computer science and design.</Text>
        <Link as={RouterLink} to="/about">
          <Box id='btn'>enter</Box>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Landing