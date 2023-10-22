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

const PaymentFail = () => {
  return (
    <Container>
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill />
        <Heading textTransform='uppercase' children="Payment Failed" my="8" textAlign={'center'} />
        <Link to="/subscribe">
          <Button variant="ghost">Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
