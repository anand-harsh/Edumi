import {
  Container,
  Heading,
  VStack,
} from '@chakra-ui/react';

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
      <Heading height={'55vh'} children={'Coming Soon'} />        
    </VStack>
  </Container>
    )
};

export default Notes;
