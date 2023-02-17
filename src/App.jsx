import { ChakraProvider } from "@chakra-ui/react"
import { Theme } from "./Theme"
// import {lazy, Suspend} from 'react'
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import Projects from "./components/Projects"
import ContactMe from "./components/ContactMe"
import About from "./components/About"
import { useTheme } from './themeContext';

// const Projects = lazy(() => import("./components/Projects"))
// const ContactMe = lazy(() => import("./components/ContactMe"))
// const About = lazy(() => import("./components/About"))

function App() {
  const {theme} = useTheme()
  const body = document.querySelector('body')
  if (theme === 'light') {body.style.backgroundColor='hsl(221,21%,60%)'}
  if (theme === 'dark') {body.style.backgroundColor='rgb(35,35,35)'}

  return (
    <ChakraProvider theme={Theme}>
      <main>
        <Header />
        <LandingPage />
   
          <Projects />
          <About />
          <ContactMe />

      </main>
    </ChakraProvider>
  )
}

export default App
