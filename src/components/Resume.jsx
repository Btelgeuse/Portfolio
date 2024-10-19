import React from 'react'

import {
  Flex,
  Box,
} from '@chakra-ui/react'

function Resume() {
  return (
    <Flex my={12} h='50vh'>
      <Flex mx='auto' width='90%' height='100%'>
        <Box bg='pink' width='90%' borderRadius={12}></Box>
        <Box bg='pink' width='10%' borderRadius={12}></Box>
      </Flex>
      
    </Flex>
  )
}

export default Resume