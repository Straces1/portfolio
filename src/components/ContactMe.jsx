import React, {useRef} from 'react'
import FullScreen from './FullScreen'
import {Theme} from '../Theme'
import {
    Heading,VStack,FormControl,Input,FormLabel,FormErrorMessage,Select,Textarea,Button,Box, Modal, useDisclosure, ModalOverlay, ModalCloseButton, ModalBody, Text, ModalContent, ModalHeader 
} from '@chakra-ui/react'
import { useTheme } from '../themeContext'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';



function ContactMe() {
  const { theme } = useTheme()
  const formRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const sendEmail = () => {
    emailjs.sendForm('service_jtpqk4f', 'template_e2zzs0d', formRef.current, 'DqpS5JYZZ96FOjtZH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
   

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: 'subject',
      message: '',

    },
    onSubmit: () => {
      sendEmail()
      formik.handleReset()
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be less then 15 characters')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .required('Do not forget your message')
        .min(20, "Please type in at least 20 characters")
    })
  })

  return (
    <FullScreen
        mt={8}
        px='10vw'
    
    >
      <Box id='Contact' py='80px' w='100%'>
      <Heading mb="15px" id='contact' size='xl' alignSelf='left'>Contact Me</Heading>
      <form onSubmit={formik.handleSubmit} ref={formRef}>
        <VStack 
          theme={Theme} 
          spacing='16px' 
          w={{base: '95vw', sm: '80vw', md: '40vw'}} 
          margin='auto'
        >
          <FormControl variant='floating' id='name' name='name' isInvalid={formik.touched.name && formik.errors.name}>
            <Input
              name='name'
              placeholder=' '
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormLabel bg={theme === 'light' ? 'hsl(221,21%,60%)' : 'rgb(35,35,35)'}>Name:</FormLabel>
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl variant='floating' id='email' name='email' isInvalid={formik.touched.email && formik.errors.email}>
            <Input
              name='email'
              placeholder=' '
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormLabel bg={theme === 'light' ? 'hsl(221,21%,60%)' : 'rgb(35,35,35)'}>Email:</FormLabel>
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl variant='floating' name='subject' >
            <Select
              id="subject"
              name='subject'
              placeholder='Subject'
              value={formik.values.subject}
              onChange={formik.handleChange}
            >
              <option value="Other">Other</option>
              <option value="Proposal">Freelance project proposal</option>
              <option value="Hire me">Employment offer</option>
            </Select>
          </FormControl>

          <FormControl variant='floating' isInvalid={formik.touched.message && formik.errors.message}>
            <Textarea
              placeholder=' '
              id='message'
              name='message'
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormLabel bg={theme === 'light' ? 'hsl(221,21%,60%)' : 'rgb(35,35,35)'}>Your message:</FormLabel>
            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
          </FormControl>
          <Button
            disabled={!formik.isValid}
            onClick={() => {
              onOpen()
              
            }}
            type='submit'
            bg={theme === 'light' ? 'hsl(221,21%,40%)' : 'hsl(221,30%,26%)'}
            w='20%' alignSelf='flex-end'
            minW='80px'
            _hover={theme === 'light' ? { bg: 'hsl(221,30%,30%)' } : { bg: 'hsl(221,30%,40%)' }}
          >
            Send
          </Button>
        </VStack>
      </form>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={theme === 'light' ? 'hsl(221,21%,60%)' : 'rgb(35,35,35)'} color={theme === 'dark' ? 'white' : 'black'}>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody >
            <Text mb='5vh'>Your message has been sent. I will get back to you soon. Thank you.</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </FullScreen>
  )
}

export default ContactMe
