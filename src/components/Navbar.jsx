import React from 'react'
import {
  Flex,
  Spacer,
  Button,
  Wrap,
  WrapItem,
  Link
} from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'

function Navbar() {
  return (
      <Flex p={2} border='1px solid'>
        <Button>LOGO</Button>

        <Spacer />

        <Wrap spacing={24}>
          <WrapItem border='1px solid'>
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

        <Spacer />

        <Button borderRadius={40} leftIcon={<DownloadIcon />}>Resume</Button>
      </Flex>
  )
}

export default Navbar