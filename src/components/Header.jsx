import React from 'react';
import { 
  Box, 
  HStack,
  Link, 
  Hide, 
  Show, 
  Menu, 
  IconButton, 
  MenuButton, 
  MenuItem, 
  MenuList, 
} from '@chakra-ui/react'
import { BsInstagram, BsEnvelope, BsGithub, BsLinkedin, BsSun, BsMoon } from "react-icons/bs";
import { IconContext } from "react-icons";
import { HamburgerIcon } from '@chakra-ui/icons'
import { useTheme } from '../themeContext'

const socials = [
    {
      icon: <BsEnvelope/>,
      url: "mailto: ondrej.straka93@gmail.com",
    },
    {
      icon: <BsInstagram/>,
      url: 'https://www.instagram.com/straka.ondrej/'
    },
    {
      icon: <BsGithub/>,
      url: "https://github.com/Straces1",
    },
    {
      icon: <BsLinkedin/>,
      url: "https://www.linkedin.com/in/ondrej-straka-249433255/",
    },
  ];

const menuArray = ['Portfolio', 'About', 'Contact']

const handleClick = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
       inline: 'nearest',
       block: 'start'
    })
  }

}

function Header() {

  const { theme, toggleTheme } = useTheme();
  return (
    <Box
        position='fixed'
        top={0}
        left={0}
        right={0}
        zIndex='3'
        bg= "hsl(221,30%,26%)"
        maxWidth={window.innerWidth}      
    >
      <Box maxWidth='100vw' margin='0 auto'>
        <HStack
          pl={{base: '1vw', sm: '2vw', md: '5vw'}}
          pr='25px'
          py={4}
          justifyContent='space-between'
          alignItems='center'
          spacing={8}
          color='white'
        >
          
          <nav>
            <HStack spacing='10px'>
              <IconContext.Provider value={{ size: '1.8rem' }}>
                {socials.map((social, key) => {
                  return (
                    <Link href={social.url} key={key} target='_blank' rel="noreferrer">{social.icon}</Link>
                  )
                })}
              </IconContext.Provider>
            </HStack>
          </nav>

            <Hide below='lg'>
              <nav>
                <HStack fontSize='25px'>
                  {menuArray.map((item, key) => {
                    return(
                      <Link key={key} onClick={() => handleClick(item)}>{item}</Link>
                    )
                  })}
                  <Link
                    pl='15px'
                    onClick={toggleTheme} 
                  >{theme === 'light' ? <BsMoon size='1.5em'/> : <BsSun size='1.7em'/>}</Link>
                </HStack>
              </nav>
            </Hide>

            <Show breakpoint='(max-width: 992px)'>
              <nav>
                <Menu isLazy>
                  {({ isOpen }) => (
                    <>
                      <MenuButton 
                        size='sm'
                        maxWidth='30px'
                        isActive={isOpen}
                        icon={<HamburgerIcon boxSize={7}/>}
                        as={IconButton}
                        variant='outline'
                      />
                      <MenuList bg='rgba(53,58,75,0.7)'>
                        {menuArray.map((item, key) => {
                          return(
                            <MenuItem key={key} bg='rgba(53,58,75,0.7)' onClick={() => handleClick(item)}>{item}</MenuItem>
                          )
                        })}
                        <MenuItem bg='rgba(53,58,75,0.7)' onClick={toggleTheme}>{theme === 'light' ? <BsMoon size='1.5em'/> : <BsSun size='1.7em'/>}</MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </nav>
            </Show>
         
        </HStack>
      </Box>
    </Box>
  )
}

export default Header
