import React from 'react'
import FullScreen from './FullScreen'
import GitLogoB from '../images/github-black.svg'
import GitLogoW from '../images/github-white.svg'
import chakra from '../images/chakra.svg'
import styledComponents from '../images/styled-components.svg'
import vite from '../images/vitejs.svg'
import { useTheme } from '../themeContext'
import {
  Box,
    Text,
    Heading,
    Image,
    Grid,
    GridItem,
} from '@chakra-ui/react'

function About() {
  const {theme} = useTheme()
  return (
    <FullScreen
        
        mt={8}
        px='10vw'
    >
      <Box id='About' py="100px">
      <Heading alignSelf='flex-start' size='xl' mb='10px'>Who is this person?</Heading>
        <Text mb='10px'>
        Born and raised in the Czech Republic. In 2018 I graduated from Chemistry of Materials at Brno University 
        of Technology. Then I spent one year as a postgraduate student worked on research of carbon dioxide capturing 
        by chemical absorption. But I had not really found myself a scientist so in September 2019 I moved to Canada, 
        where I spend couple years by working in various positions in the consruction industry, but I always dreamed to unwind my engineering mind. 
        During the time waiting for my Permanent Residency in Canada I returned to my old hobby - coding.
          </Text>
          <Text>
          I took couple online courses to get solid knowledge of HTML, CSS and JavaScript. Soon I focused my attention to 
          React JS I'm passionate about coding things from scratch and learning new things. I'm comfortable using common 
          developers tools such as GitHub, React Bootstrap. I'm currently looking for a job as a FrontEnd developer. 
          </Text>
          <Heading size='lg' mt='15px'mb='10px'>Skills:</Heading>
          <Grid 
            ml={{base: '30px', sm: 'auto'}} 
            templateColumns={['repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(9, 1fr)']} 
            gap='1vw'
          >
            <GridItem><Image src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' width='50px'borderRadius='5px'/></GridItem>
            <GridItem><Image src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' width='50px'/></GridItem>
            <GridItem><Image ml='-5px' src='https://www.w3.org/html/logo/downloads/HTML5_Logo.svg' width='70px'/></GridItem>
            <GridItem><Image src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' width='38px'/></GridItem>
            <GridItem><Image src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' width='50px'/></GridItem>
            <GridItem>{theme === 'light' ? <Image src={GitLogoB} minWidth='50px'/> : <Image src={GitLogoW} minWidth='50px'/>}</GridItem>
            <GridItem><Image src={chakra} width='60px' ml='-5px'/></GridItem>
            <GridItem><Image src={styledComponents} width='50px'/></GridItem>
            <GridItem><Image src={vite} width='50px'/></GridItem>
          </Grid>


      </Box>
    </FullScreen>
  )
}

export default About
