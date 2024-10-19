import React from 'react'
import {
  Flex,
  Box,
  Text,
  Heading,
  IconButton,
  HStack,
  useDisclosure,
  Link,
} from '@chakra-ui/react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

// Ordinateur large

function LandingPage() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
      <Flex h='100vh' paddingTop={{ base: '8px', sm: '8px', md: '8px', lg: '128px'}}  flexDirection='column' >

        {/* Menu drawer + icon */}
        <Flex justifyContent='end'>
          <IconButton
          icon={<HamburgerIcon />}
          ref={btnRef}
          onClick={onOpen}
          bg='transparent'
          mx={4}
          display={['flex', 'flex', 'flex', 'none']}
          width='32px'
          ></IconButton>          
        </Flex>


        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg='#090909'>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>

            <DrawerBody>
              <Flex flexDirection='column'>
                <Link my='8px'>Home</Link>
                <Link my='8px'>About</Link>
                <Link my='8px'>Skills</Link>
                <Link my='8px'>Projects</Link>
                <Link my='8px'>Contact</Link>
              </Flex>
              
            </DrawerBody>

            <DrawerFooter>
              {/* Mettre les infos correspondantes */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* Box containing frame and text */}
        <Box width='90%' height='95%' mx='auto'>

          {/* Image frame */}
          <Box bg="rgba(255, 255, 255, 0.1)" width='100%' height={{ base: '70%', sm: '70%', md: '70%', lg: '70%'}} borderRadius={40} borderBottomLeftRadius='0px' borderBottomRightRadius='0px'>
          </Box>

          {/* Box containing bottom text */}
          <Flex>
            
            {/* Left box containing title and description */}
            <Box w='50%'>
              <Heading
              as='h1'
              my={3}
              letterSpacing='0.4em'
              fontSize={{ base: '14px', sm: '28px', md: '32px', lg: '40px'}}
              >
                BETELGEUSE
              </Heading>
              <Text letterSpacing='0.1em' fontSize={{ base: '10px', sm: '10px', md: '14px', lg: '16px'}}>Computer science and design student at CY Ecole de Design.</Text>
            </Box>

            {/* Right box containing social medias */}
            <Box w='50%' textAlign='right'>
              <Text
              fontFamily='"Libre Barcode 39 Text", system-ui'
              my={2}
              fontSize={{ base: '14px', sm: '14px', md: '24px', lg: '40px'}}
              >
                Social media
              </Text>
              <Flex justifyContent='end'>
                <HStack spacing={{ base: '8px', sm: '8px', md: '8px', lg: '40px'}}>
                  <IconButton size={{ base: 'sm', sm: 'sm', md: 'md', lg: 'lg'}}></IconButton>
                  <IconButton size={{ base: 'sm', sm: 'sm', md: 'md', lg: 'lg'}}></IconButton>
                  <IconButton size={{ base: 'sm', sm: 'sm', md: 'md', lg: 'lg'}}></IconButton>
                </HStack>
            
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
  )
}

export default LandingPage