import React from 'react'
import FullScreen from './FullScreen'
import {
    Heading,
    Image,
    VStack,
    Text,
    Box,
    Grid,
} from '@chakra-ui/react'
import { useTheme } from '../themeContext'

function LandingPage() {
  const { theme } = useTheme();
  return (
    <FullScreen
      bg={theme === 'light' ? 'hsl(221,21%,60%)' : 'rgb(35,35,35)'}
      width='100%'
      mt='7vh'
    >
      <Grid 
        // px={16}
        py={10}
        color={theme === 'light' ? 'black' : 'white'}
        templateColumns={{base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)'}}
        gap='10vw'
        spacing={8}
        alignItems="center"
      >
        <Image 
          src='./images/avatar.webp'
          borderRadius='50%'
          width={{base: '70vw', sm: '40vw', md:'30vw'}}
          mx='auto'
        />
        <VStack alignItems='flex-start'>
          <Heading size={{base: 'lg', md: 'xl'}}>Hi, I'm Ondrej</Heading>
          <Box w={{base: '90vw', sm: '40vw', md:'30vw'}}>
            <Text>Junior self-taught fulstack developer. Proficient in JavaScript, ReactJS, NodeJS</Text>
          </Box>
        </VStack>
      
      </Grid>
    </FullScreen>
  )
}

export default LandingPage
