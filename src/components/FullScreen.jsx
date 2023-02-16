import { VStack } from '@chakra-ui/react';
import * as React from "react";
import { useTheme } from '../themeContext'


function FullScreen({children, ...boxProps}) {
  const { theme } = useTheme()
  return (
    <VStack
        bg={theme === 'light' ? 'hsl(221,21%,60%)' : 'rgb(35,35,35)'}
        color={theme === 'dark' ? 'white' : 'black'}
        minHeight="100vh"
        fontSize='18pt'
    >
      <VStack width="100%" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  )
}

export default FullScreen
