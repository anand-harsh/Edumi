import {
  Container,
  VStack,
  Heading,
  FormLabel,
  Input,
  Box,
  Button,
} from '@chakra-ui/react';
import { toast } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom';

import React, { useState } from 'react';

import { API_ENDPOINT } from '../../config/constant';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_ENDPOINT}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      console.log(data);

      if (data?.success) {
        localStorage.setItem('isAuth', true, 3600000);
        localStorage.setItem(
          'userData',
          JSON.stringify({ User: data?.user }),
          3600000
        );

        toast.success(`${data?.message}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        navigate('/');
      } else {
        toast.error(`${data?.message}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Welcome to Edumi'} />

        <form style={{ width: '100%' }}>
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
          <Box>
            <Link to="/forgetpassword">
              <Button variant="link" fontSize={'sm'}>
                Forgot Password?
              </Button>
            </Link>
          </Box>

          <Button
            my={'4'}
            colorScheme="yellow"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>

          <Box my={'4'}>
            New User?
            <Link to="/signup">
              <Button colorScheme="yellow" variant={'link'}>
                Sign Up
              </Button>{' '}
            </Link>
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
