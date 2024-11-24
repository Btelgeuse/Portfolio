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
} from "@chakra-ui/react"
import { IoMenu } from "react-icons/io5"

function LandingPage() {

  const [open, setOpen] = useState(false)

  return (

    <>
      <Box w='100vw' h='100vh' bgColor='pink' display='flex'>
        <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement='start'>
          <DrawerBackdrop />
          <Center h='100vh' maxWidth={16} minWidth={8} bgColor='white' p={4} position='sticky' boxShadow='sm'>
            <DrawerTrigger asChild>
              <IconButton variant="outline" size="sm" aria-label="Search database" rounded='full'>
                <IoMenu  color='black' />
              </IconButton>
            </DrawerTrigger>
          </Center>
          
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <DrawerActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerActionTrigger>
              <Button>Save</Button>
            </DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>

        <Center w='100%'>
          <Heading boxShadow='sm' size='3xl' position='absolute' transform='translateX(-120%)' rotate='z 3deg' display='flex' color='#222' bgColor='white' p='8px 24px' letterSpacing={10}>BE<Text fontWeight='300'>TELGEUSE</Text></Heading>
          <Image src="../public/Sticky_Carton.png" alt="Betelgeuse Background" h='100%' m='0 auto' />
        </Center>
      </Box>
    </>
    
  )
}

export default LandingPage