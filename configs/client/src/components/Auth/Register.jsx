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
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [imagePrev, setimagePrev] = React.useState('');
  const [image, setImage] = React.useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimagePrev(reader.result);
      setImage(file);
    };
  };
  return (
    <Container  overflow="hidden">
      <VStack
        h={'full'}
        justifyContent={'center'}
        spacing={'16'}
        style={{ width: '100%', overflow: 'hidden' }}
      >
        <Heading children={'Register'} textTransform={'uppercase'} />

        <form action="" style={{ width: '100%', overflow: 'hidden' }}>
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

          <Button my={'4'} colorScheme="yellow" type="submit">
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
