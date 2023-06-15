import {
  Container,
  VStack,
  Heading,
  FormLabel,
  Input,
  Box,
  Link,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Welcome to Edumi'} />

        <form action="" style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              type="email"
              focusBorderColor="yellow.400"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              type="password"
              focusBorderColor="yellow.400"
            />
          </Box>
          <Box my={'4'}>
            <Link to="/forgetpassword">
              <Button variant={'link'} fontSize={'sm'}>
                Forgot Password
              </Button>
            </Link>
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Login
          </Button>

          <Box my={'4'}>
            New User?
            <Link to="/register">
              <Button colorScheme="yellow" variant={'link'}>Sign Up</Button> {" "}
              
            </Link>
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
