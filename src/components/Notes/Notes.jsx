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

const Notes = () => {
  return(
  <Container>
    <VStack
    h='full'
    justifyContent='center'
    spacing={'100'}
    >
      <Heading children={'Notes'} />
      <Heading height={'54vh'} children={'Coming Soon'} />        
    </VStack>
  </Container>
    )
};

export default Notes;
