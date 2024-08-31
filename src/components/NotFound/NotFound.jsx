import {
  Container,
  Heading,
  VStack,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
  return (
    <Container>
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill />
        <Heading children="Page not Found" my="8" textAlign={'center'} />
        <Link to="/">
          <Button variant="ghost">Go to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
