import React from 'react'
import {
  Flex,
  Wrap,
  WrapItem,
  Link
} from '@chakra-ui/react'

function Navbar() {

  return (
      <Flex
        px={4}
        py={2}
        borderRadius={40}
        bg="rgba(255, 255, 255, 0.1)"
        position='fixed'
        top='32px'
        left='50%'
        transform='translateX(-50%)'
        border="1px solid rgba(255, 255, 255, 0.2)"
        zIndex={1000}
        >

        <Wrap spacing={10}>

          <WrapItem>
            <Link px={4} py={1} borderRadius={40} bg="transparent" _hover={{bg: "rgba(255, 255, 255, 1)", transition: "background-color 0.3s ease", color: 'black'}}>Home</Link>
          </WrapItem>

          <WrapItem>
            <Link px={4} py={1} borderRadius={40} bg="transparent" _hover={{bg: "rgba(255, 255, 255, 1)", transition: "background-color 0.3s ease", color: 'black'}}>About</Link>
          </WrapItem>

          <WrapItem>
            <Link px={4} py={1} borderRadius={40} bg="transparent" _hover={{bg: "rgba(255, 255, 255, 1)", transition: "background-color 0.3s ease", color: 'black'}}>Skills</Link>
          </WrapItem>

          <WrapItem>
            <Link px={4} py={1} borderRadius={40} bg="transparent" _hover={{bg: "rgba(255, 255, 255, 1)", transition: "background-color 0.3s ease", color: 'black'}}>Projects</Link>
          </WrapItem>

          <WrapItem>
            <Link px={4} py={1} borderRadius={40} bg="transparent" _hover={{bg: "rgba(255, 255, 255, 1)", transition: "background-color 0.3s ease", color: 'black'}}>Contact</Link>
          </WrapItem>
        </Wrap>

      </Flex>
  )
}

export default Navbar