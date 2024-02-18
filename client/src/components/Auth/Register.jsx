import {
  Container,
  VStack,
  Heading,
  FormLabel,
  Input,
  Box,
  Button,
  Avatar,
} from '@chakra-ui/react';

import { API_ENDPOINT } from '../../config/constant';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const fileUploadStyle = {
  '&::file-selector-button': {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: '#ECC948',
    backgroundCorlor: 'white',
  },
};
const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagePrev, setimagePrev] = useState('');
  const [coverImage, setCoverImage] = useState(null);

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    console.log(file);

    reader.onloadend = () => {
      setimagePrev(reader.result);
      setCoverImage(file);
    };
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Binding Form Data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('password', password);
    formData.append('coverImage', coverImage);

    try {
      const res = await fetch(`${API_ENDPOINT}/register`, {
        method: 'POST',

        credentials: 'include',
        body: formData,
      });

      const data = await res.json();

      if (data?.success) {
        localStorage.setItem('isAuth', true, 3600000);
        localStorage.setItem(
          'userData',
          JSON.stringify({
            User: {
              name: data?.user?.name,
              email: data?.user?.email,
              createdAt: data?.user?.createdAt,
            },
          }),
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
        navigate('/signup');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container overflow="hidden">
      <VStack
        h={'full'}
        justifyContent={'center'}
        spacing={'16'}
        style={{ width: '100%', overflow: 'hidden' }}
      >
        <Heading children={'Register'} textTransform={'uppercase'} />

        <form
          style={{ width: '100%', overflow: 'hidden' }}
          onSubmit={handleSubmit}
        >
          <Box my="4" display={'flex'} justifyContent={'center'}>
            <Avatar size={'2xl'} src={imagePrev} />
          </Box>
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
            <FormLabel htmlFor="chooseAavatar" children="Choose Aavatar" />
            <Input
              accept="image/*"
              required
              id="chooseAavatar"
              type={'file'}
              focusBorderColor="yellow.400"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your Email"
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

          <Button
            my={'4'}
            colorScheme="yellow"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>

          <Box my={'4'}>
            Already Signed Up?
            <Link to="/login">
              <Button colorScheme="yellow" variant={'link'}>
                Login
              </Button>{' '}
            </Link>
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
