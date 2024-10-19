import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react'

function AboutMe() {
  return (
    <>
      <Flex h={{lg: '150vh', xl: '150vh'}} border='1px solid white' flexDirection='column'>
        <Heading
        as='h2'
        letterSpacing={10}
        textAlign='center'
        my={{ base: '16px', sm: '16px', md: '24px', lg: '40px', xl: '40px'}}
        fontSize={{ base: '20px', sm: '20px', md: '32px', lg: '48px', xl: '56px'}}
        >ABOUT ME</Heading>

        {/* Joanne description laptop */}
        <Flex
        width='90%'
        height={{ base: '0', sm: '0', md: '0', lg: '60%'}}
        mx='auto'
        marginBottom={{ base: '8px', sm: '8px', md: '8px', lg: '56px'}}
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex'}}>

          {/* Left containing text */}
          <Flex width='70%' height='100%' border='1px solid green' flexDirection='column'>
            {/* Reserving space */}
            <Flex width='100%' height='50%'>
              <Flex width='90%' height={{ base: '0', sm: '0', md: '0', lg: '8%'}} border='1px solid orange' position='absolute'>
                {/* Containing the bg */}
              </Flex>
              
            </Flex>
            <Flex border='1px solid white' width='100%' height='50%' flexDirection='column'>
              <Text fontWeight='800' letterSpacing={8} fontSize='40px'>JOANNE</Text>
              <Text fontWeight='100' letterSpacing='0.1em' fontSize={{ base: '10px', sm: '10px', md: '10px', lg: '14px'}} width='100%'>Is an angle representing the angle of the rotation. The direction of rotation depends on the writing direction. In a left-to-right context, a positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one. In a right-to-left context, a positive angle denotes a counter-clockwise rotation, a negative angle a clockwise one.</Text>                      
            </Flex>            
          </Flex>

          {/* Right containing the pic */}
          <Flex width='30%' height='100%' border='1px solid white'>
            {/* Contains the profile pic */}
          </Flex>

        </Flex>

        {/* Betelgeuse description laptop */}
        <Flex
        width='90%'
        height={{ base: '0', sm: '0', md: '0', lg: '60%'}}
        mx='auto'
        marginBottom={{ base: '8px', sm: '8px', md: '8px', lg: '56px'}}
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex'}}>

          {/* Left containing text */}
          <Flex width='70%' height='100%' border='1px solid green' flexDirection='column'>
            {/* Reserving space */}
            <Flex width='100%' height='50%'>
              <Flex width='90%' height={{ base: '0', sm: '0', md: '0', lg: '8%'}} border='1px solid orange' position='absolute'>
                {/* Containing the bg */}
              </Flex>
              
            </Flex>
            <Flex border='1px solid white' width='100%' height='50%' flexDirection='column'>
              <Text fontWeight='800' letterSpacing={8} fontSize='40px'>BETELGEUSE</Text>
              <Text fontWeight='100' letterSpacing='0.1em' fontSize={{ base: '10px', sm: '10px', md: '10px', lg: '14px'}} width='100%'>Is an angle representing the angle of the rotation. The direction of rotation depends on the writing direction. In a left-to-right context, a positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one. In a right-to-left context, a positive angle denotes a counter-clockwise rotation, a negative angle a clockwise one.</Text>                      
            </Flex>            
          </Flex>

          {/* Right containing the pic */}
          <Flex width='30%' height='100%' border='1px solid white'>
            {/* Contains the profile pic */}
          </Flex>
        </Flex>


        {/* Joanne description mobile */}
        <Flex
        flexDirection='column'
        mx='auto'
        marginBottom={{base: '16px', sm: '16px', md: '32px'}}
        width='90%'
        height='50%'
        border='1px solid orange'
        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none'}}>
          <Text letterSpacing='0.1em' fontWeight='700' textAlign='center'  fontSize={{base: '12px', sm: '12px', md: '24px'}} marginBottom={2}>JOANNE</Text>
          <Box border='1px solid white' width={{ base: '90%', sm: '90%', md: '70%'}} height={{ base: '128px', sm: '128px', md: '208px'}} mx='auto' transform='rotate(-2deg)' marginBottom={{base: '16px', sm: '16px', md: '32px'}}></Box>
          <Text fontSize={{ base: '10px', sm: '10px', md: '14px', lg: '16px', xl: '24px'}} letterSpacing='0.1em'>Is an angle representing the angle of the rotation. The direction of rotation depends on the writing direction. In a left-to-right context, a positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one. In a right-to-left context, a positive angle denotes a counter-clockwise rotation, a negative angle a clockwise one.</Text>
        </Flex>

        {/* Betelgeuse description mobile */}
        <Flex
        flexDirection='column'
        mx='auto'
        marginBottom={{base: '16px', sm: '16px', md: '32px'}}
        width='90%'
        height='50%'
        border='1px solid orange'
        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none'}}>
          <Text letterSpacing='0.1em' fontWeight='700' textAlign='center'  fontSize={{base: '12px', sm: '12px', md: '24px'}} marginBottom={2}>BETELGEUSE</Text>
          <Box border='1px solid white' width={{ base: '90%', sm: '90%', md: '70%'}} height={{ base: '128px', sm: '128px', md: '208px'}} mx='auto' transform='rotate(2deg)' marginBottom={{base: '16px', sm: '16px', md: '32px'}}></Box>
          <Text fontSize={{ base: '10px', sm: '10px', md: '14px', lg: '16px', xl: '24px'}} letterSpacing='0.1em'>Is an angle representing the angle of the rotation. The direction of rotation depends on the writing direction. In a left-to-right context, a positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one. In a right-to-left context, a positive angle denotes a counter-clockwise rotation, a negative angle a clockwise one.</Text>
        </Flex>
      </Flex>
    </>
  )
}

export default AboutMe