import React from 'react'
import {
    Flex,
    Heading,
    Progress,
		Text
} from '@chakra-ui/react'

function Skills() {
  return (
    <Flex flexDirection='column' h={{ base: '92vh', sm: '92vh', md: '70vh', lg: '92vh'}}>
      <Heading
        as='h2'
        letterSpacing={10}
        textAlign='center'
        my={{ base: '16px', sm: '16px', md: '24px', lg: '40px', xl: '40px'}}
        fontSize={{ base: '20px', sm: '20px', md: '32px', lg: '48px', xl: '56px'}}
        >SKILLS
      </Heading>

      <Flex mx='auto' width='90%' h='100%' border='1px solid white' flexDirection='column'>

				<Flex mx='auto' width='100%' alignItems='center' marginBottom={4} justifyContent='space-between' >
					<Text marginRight={8}>FIGMA</Text>
					<Progress value={80} size='sm' width='85%' colorScheme='green'/>					
				</Flex>

				<Flex mx='auto' width='100%' alignItems='center' marginBottom={4} justifyContent='space-between'>
					<Text marginRight={8}>ILLUSTRATOR</Text>
					<Progress value={60} size='sm' width='85%' colorScheme='green' />					
				</Flex>

				<Flex mx='auto' width='100%' alignItems='center' marginBottom={4} justifyContent='space-between'>
					<Text marginRight={8}>PHOTOSHOP</Text>
					<Progress value={20} size='sm' width='85%' colorScheme='green' />					
				</Flex>

				<Flex mx='auto' width='100%' alignItems='center' marginBottom={4} justifyContent='space-between'>
					<Text marginRight={8}>3DS MAX</Text>
					<Progress value={60} size='sm' width='85%' colorScheme='green' />					
				</Flex>

				<Flex mx='auto' width='100%' alignItems='center' marginBottom={4} justifyContent='space-between'>
					<Text marginRight={8}>PYTHON</Text>
					<Progress value={40} size='sm' width='85%' colorScheme='green' />					
				</Flex>

				<Flex mx='auto' width='100%' alignItems='center' marginBottom={4} justifyContent='space-between'>
					<Text marginRight={8}>HTML/CSS</Text>
					<Progress value={80} size='sm' width='85%' colorScheme='green' />					
				</Flex>

				<Flex mx='auto' width='100%' alignItems='center' marginBottom={4} justifyContent='space-between'>
					<Text marginRight={8}>JAVASCRIPT</Text>
					<Progress value={40} size='sm' width='85%' colorScheme='green' />					
				</Flex>

				<Flex mx='auto' width='100%' alignItems='center' marginBottom={4} justifyContent='space-between'>
					<Text marginRight={8}>REACT.JS</Text>
					<Progress value={40} size='sm' width='85%' colorScheme='green' />					
				</Flex>

				<Flex mx='auto' width='100%' alignItems='center' marginBottom={4} justifyContent='space-between'>
					<Text marginRight={8}>JAVA</Text>
					<Progress value={20} size='sm' width='85%' colorScheme='green' />					
				</Flex>
				
      </Flex>
    </Flex>
  )
}

export default Skills