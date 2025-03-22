import { 
    Center,
    Flex,
    Link,
 } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
  return (
    <Center w="100vw" h={14} bgColor="red" position="absolute">
        <Flex gap={12}>
            <Link href='#' className='nav-links'>ABOUT</Link>
            <Link href='#' className='nav-links'>SKILLS</Link>
            <Link href='#' className='nav-links'>PROJECTS</Link>
            <Link href='#' className='nav-links'>CONTACT</Link>
            <Link href='#' className='nav-links'>LEARNING</Link>
        </Flex>        
    </Center>

  )
}

export default Navbar