import React from 'react'

import { 
    Center,
    Flex,
    Link,
 } from '@chakra-ui/react'

import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { LuFileSpreadsheet } from "react-icons/lu";

function Footer() {
  return (
    <Center w="100vw" h={16} position="absolute" bottom="0" >
        <Flex gap={12}>
            <Link href='#' className='contact-links'><CiLinkedin/>LinkedIn</Link>
            <Link href='#' className='contact-links'><FaInstagram/>Instagram</Link>
            <Link href='#' className='contact-links'><LuGithub/> GitHub</Link>
            <Link href='#' className='contact-links'><LuFileSpreadsheet/>Resume</Link>
        </Flex>        
    </Center>
  )
}

export default Footer