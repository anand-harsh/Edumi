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

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  return(
  <Container>
    <VStack
    h='full'
    justifyContent='center'
    spacing={'16'}
    >
      <Heading children={'Contact Us'} />
      <form action="" style={{ width: '100%' }}>
        <Box my={'4'}>
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

        <Box my={'4'}>
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

        <Box my={'4'}>
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

        <Button my={'4'} colorScheme="yellow" type="submit">
          Send
        </Button>

        <Box my={'4'}>
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
