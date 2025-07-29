import { 
    Center,
    Flex,
    Link
 } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'

function Navbar() {
  return (
    <Center w="100vw" h={16} position="absolute">
        <Flex gap={12}>
            <Link as={RouterLink} to="/about" className='nav-links' _hover={{
            textDecoration: "none",
            bgColor: "rgba(139, 88, 179, .3)",
            borderRadius: "50px",
            p: "6px 14px",
            transition: ".3s ease"
            }}>ABOUT</Link>

            <Link as={RouterLink} to="/skills" className='nav-links' _hover={{
            textDecoration: "none",
            bgColor: "rgba(139, 88, 179, .3)",
            borderRadius: "50px",
            p: "6px 14px",
            transition: ".3s ease"
            }}>SKILLS</Link>

            <Link as={RouterLink} to="/projects" className='nav-links' _hover={{
            textDecoration: "none",
            bgColor: "rgba(139, 88, 179, .3)",
            borderRadius: "50px",
            p: "6px 14px",
            transition: ".3s ease"
            }}>PROJECTS</Link>
            
            <Link as={RouterLink} to="/labs" className='nav-links' _hover={{
            textDecoration: "none",
            bgColor: "rgba(139, 88, 179, .3)",
            borderRadius: "50px",
            p: "6px 14px",
            transition: ".3s ease"
            }}>LABS</Link>
        </Flex>        
    </Center>
  )
}

export default Navbar