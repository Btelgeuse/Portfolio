import React from 'react'
import {
  Flex,
  Button,
  Wrap,
  WrapItem,
  Link
} from '@chakra-ui/react'

function Navbar() {
  return (
    <>
      <Flex border='1px solid'>
        <Button>LOGO</Button>
        <Wrap>
          <WrapItem>
            <Link>About</Link>
          </WrapItem>
          <WrapItem>
            <Link>Skills</Link>
          </WrapItem>
          <WrapItem>
            <Link>Projects</Link>
          </WrapItem>
          <WrapItem>
            <Link>Contact</Link>
          </WrapItem>
        </Wrap>
        <Button>Resume</Button>
      </Flex>
    </>
  )
}

export default Navbar