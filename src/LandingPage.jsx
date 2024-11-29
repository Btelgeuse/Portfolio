import React from 'react'
import { useState } from "react"
"use client"

import { Button } from "@/components/ui/button"
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  IconButton,
  Center,
  Box,
  Image,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react"

import { IoMenu } from "react-icons/io5"
import { LuDownload } from "react-icons/lu";

function LandingPage() {

  const [open, setOpen] = useState(false)

  return (
      <Box w="100vw" h="100vh" bgColor="pink" display="flex" flexShrink="0">
        <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement='start' >
          <DrawerBackdrop />
          <Center h='100%' bgColor='white' p={4} position='fixed' zIndex='999' boxShadow='sm'>
            <DrawerTrigger asChild>
              <IconButton variant='ghost' _hover={{bg: "#d9d9d9", color: "black",}} size="sm" aria-label="Search database" rounded='full'>
                <IoMenu  color='black' />
              </IconButton>
            </DrawerTrigger>
          </Center>
          
          <DrawerContent color='#222' bgColor='white'>
            <DrawerHeader>
              <DrawerTitle letterSpacing={8} fontWeight='400' fontSize='2em'>MENU</DrawerTitle>
            </DrawerHeader>
            <DrawerBody display='flex' flexDirection='column'  letterSpacing={8} fontWeight='300' fontSize='2em'>
              <Link href='#aboutPage' m='16px 0' color='#222' _hover={{fontWeight: '500', textDecoration: 'none'}} _focus={{outline: 'none'}}>ABOUT</Link>
              <Link href='#' m='16px 0' color='#222' _hover={{fontWeight: '500', textDecoration: 'none'}} _focus={{outline: 'none'}}>SKILLS</Link>
              <Link href='#' m='16px 0' color='#222' _hover={{fontWeight: '500', textDecoration: 'none'}} _focus={{outline: 'none'}}>PROJECTS</Link>
              <Link href='#' m='16px 0' color='#222' _hover={{fontWeight: '500', textDecoration: 'none'}} _focus={{outline: 'none'}}>MEDIAS</Link>
            </DrawerBody>
            <DrawerFooter display='inline'>
              <Box m='16px 0'>
                <Text fontWeight='400' fontSize='1.5em'>Contact</Text>
                <Text fontWeight='300'>b.telgeusedev@gmail.com</Text>
              </Box>
              <Box>
                <Text fontWeight='400' fontSize='1.5em'>Resume</Text>
                <Link fontWeight='300' color='#222'><LuDownload />Download Resume</Link>
              </Box>
              
            </DrawerFooter>
            <DrawerCloseTrigger _hover={{bg: "#d9d9d9", color: "black",}} />
          </DrawerContent>
        </DrawerRoot>

        <Center w='100%' h='100%' bgImage="url('/Sticky_Carton.png')" bgSize='contain' backgroundPosition='center'>
          <Heading boxShadow='sm' size='3xl' position='relative' transform='translateX(-120%)' rotate='z 3deg' display='flex' color='#222' bgColor='white' p='8px 24px' letterSpacing={10}>BE<Text fontWeight='300'>TELGEUSE</Text></Heading>
        </Center>
      </Box>
    
  )
}

export default LandingPage