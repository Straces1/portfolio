import React from 'react'
import FullScreen from './FullScreen'
import {
    Heading, VStack, Link, Image, Text, Flex, Grid, GridItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useTheme } from '../themeContext'



function Projects() {
    const { theme } = useTheme();

    const projects = [
        {
            heading: "Fullstack web app for yoga teacher",
            imgSrc: './images/mern-app.webp',
            text: 'Fullstack web app built in MERN (MongoDB, Express, ReactJS, NodeJS). This project was build for a real client according to UI Design created by Anna Vlasakova. Client can log in which allows to see a dashboard, where new yoga classes and events can be created. In case the yoga business grows, the owner can create new users too.',
            linkPage: 'https://immerse-yourself-frontend.onrender.com/',
            linkCode: 'https://github.com/Straces1/mern-frontend',
            backend: 'https://github.com/Straces1/mern-backend'
        },
        {
            heading: "Fullstack To Do List with Admins Page",
            imgSrc: './images/todolist.webp',
            text: "Fullstack project I built in order to learn and strengthen my backend coding skills. Backend is built in Node js with Express framework, it is connected to Mongo Database and frontend of this app is built with static ejs files",
            linkPage: 'https://todo-backend-app.cyclic.cloud',
            linkCode: 'https://github.com/Straces1/node-todoList'
        },
        {
            heading: "Ecommerce Product Page",
            imgSrc: './images/sneakers.webp',
            text: "Responsive Ecommerce according to FrontEnd Mentors design template. Built with use of Style Components. User can add items to the cart, cart section will display items and calculate total price.",
            linkPage: 'https://straces1.github.io/ecommerce/#/',
            linkCode: 'https://github.com/Straces1/ecommerce'
        },
        {
            heading: "REST Countries API with Color theme Switcher",
            imgSrc: './images/rest-api-countries.webp',
            text: "App displaying flags, capitals and population of all countries in the world, using REST Countries API. User can use input field to search for a country or filter coutries by region.",
            linkPage: 'https://straces1.github.io/rest-country-api-app/',
            linkCode: 'https://github.com/Straces1/rest-country-api-app'
        },
        {
            heading: "Outdoor Photographer's Portfolio",
            imgSrc: './images/pavla-portfolio.webp',
            text: "Responsive photographer's web portfolio built in React JS, using Chakra UI component library.", // , includes contact form powered by Formik and Yup
            linkPage: 'https://pavlabphoto.org/',
            linkCode: 'https://github.com/Straces1/pavla-breska-photography'
        },
        
        
    ]
  return (
    <FullScreen
        
        bg={theme === 'light' ? 'hsl(221,21%,60%)' : 'rgb(35,35,35)'}
        width='100%'
        
        px={['5vw', '5vw', '10vw', '10vw']}
        mb={8}
    >
      <VStack id='Portfolio' py="80px" spacing='50px'>

        <Heading alignSelf='flex-start' mb='-20px' size='xl'>Projects</Heading>

            {projects.map((project, key) => {
                return (
                    <VStack
                    key={key}
                    alignItems='left'
                    px={5}
                >
                    <Heading size='lg' >{project.heading}</Heading>
                    <Grid templateColumns={{base:'repeat(1, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(4, 1fr)'}} gap='15px'>
                        <GridItem  colSpan={{base: 4, sm: 2, md: 1}}><Image src={project.imgSrc} /></GridItem>
                        <GridItem colSpan={{base: 4, sm: 2, md: 3}}>
                        <VStack fontSize={['md', 'md', 'md', 'lg']}>
                            <Text align='left'>{project.text}</Text>
                            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap='15px' alignSelf='start'>
                                <Link mr='5px' href={project.linkPage} isExternal>See more <ExternalLinkIcon mx='2px' mb='4px' /></Link>
                                <Link mr='5px' href={project.linkCode} isExternal><Flex gap='5px'><span>Code </span></Flex></Link>
                                {project.backend ? <Link ml={{base: '0', md: '-60px'}} href={project.linkCode} isExternal><Flex gap='5px'><span>Backend</span></Flex></Link> : null}
                            </Grid>
                        </VStack>
                        </GridItem>
                    </Grid>
                </VStack>
                )
            })}      
      </VStack>

    </FullScreen>
  )
}

export default Projects
