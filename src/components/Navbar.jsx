import { 
    Center,
    Flex,
    Link,
 } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
  return (
    <Center w="100vw" h={16} position="absolute">
        <Flex gap={12}>
            <Link href='#' className='nav-links' _hover={{
            textDecoration: "none",
            bgColor: "rgba(139, 88, 179, .3)",
            borderRadius: "50px",
            p: "4px 10px",
            transition: ".3s ease"
            }}>ABOUT</Link>

            <Link href='#' className='nav-links' _hover={{
            textDecoration: "none",
            bgColor: "rgba(139, 88, 179, .3)",
            borderRadius: "50px",
            p: "4px 10px",
            transition: ".3s ease"
            }}>SKILLS</Link>

            <Link href='#' className='nav-links' _hover={{
            textDecoration: "none",
            bgColor: "rgba(139, 88, 179, .3)",
            borderRadius: "50px",
            p: "4px 10px",
            transition: ".3s ease"
            }}>PROJECTS</Link>
            
            <Link href='#' className='nav-links' _hover={{
            textDecoration: "none",
            bgColor: "rgba(139, 88, 179, .3)",
            borderRadius: "50px",
            p: "4px 10px",
            transition: ".3s ease"
            }}>LABS</Link>
        </Flex>        
    </Center>
  )
}

export default Navbar