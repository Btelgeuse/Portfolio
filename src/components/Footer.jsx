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
            <Link
            href='https://www.linkedin.com/in/joanne-andriamahandry-849526275/'
            className='contact-links'
            target="_blank"><CiLinkedin/>LinkedIn</Link>

            <Link
            href='https://www.instagram.com/b.telgeuse/'
            className='contact-links'
            target="_blank"><FaInstagram/>Instagram</Link>

            <Link href='https://github.com/Btelgeuse'
            className='contact-links'
            target="_blank"><LuGithub/> GitHub</Link>
            <Link href='#' className='contact-links'><LuFileSpreadsheet/>Resume</Link>
        </Flex>        
    </Center>
  )
}

export default Footer