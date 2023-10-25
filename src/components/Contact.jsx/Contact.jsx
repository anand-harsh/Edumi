import {
  Container,
  Heading,
  VStack,
  Box,
  Input,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import React from 'react';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
   
    const calculateViewportHeight = () => {
      const height = window.innerHeight;
      
      const offset = 134; // 20 pixels
      setViewportHeight(height - offset);
    };

    
    calculateViewportHeight();
    window.addEventListener('resize', calculateViewportHeight);

    
    return () => {
      window.removeEventListener('resize', calculateViewportHeight);
    };
  }, []);

 






  return(
  <Container>
    <VStack
    justifyContent='center'
    spacing={'5'}
    
    h={`${viewportHeight}px`}
    >
      <Heading children={'Contact Us'} />
      <form action="" style={{ width: '100%' }}>
        <Box
        >
          <FormLabel htmlFor="name" children="Name" />
          <Input
            required
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your Name"
            type="text"
            focusBorderColor="yellow.400"
          />
        </Box>

        <Box my={3}>
          <FormLabel htmlFor="email" children="Email Address" />
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Abc"
            type="email"
            focusBorderColor="yellow.400"
          />
        </Box>

        <Box my={3}>
          <FormLabel htmlFor="message" children="Message" />
          <Input
            required
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Your message"
            focusBorderColor="yellow.400"
          />
        </Box>

        <Button my={3} colorScheme="yellow" type="submit">
          Send
        </Button>

        <Box my={3}>
            Resquest For a Course?
            <Link to="/request">
            {' '}
              <Button colorScheme="yellow" variant={'link'}>
              Click
              </Button>{' '}
            </Link>
            here
          </Box>
      </form>

      
    </VStack>
  </Container>
    )
};

export default Contact;
