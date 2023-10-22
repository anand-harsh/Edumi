import React from 'react';
import {
  Container,
  VStack,
  Box,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react';

const Subscribe = () => {
  return (
    <Container h="90vh" p="16">
      <Heading children="Welcome" my="8" textAlign={'center'} />
      <VStack boxShadow={'lg'} alignItems={'stretch'} my="8" spacing={'8'}>
        <Box bg="yellow.400" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text children="Pro Pack - 399.00" color={'black'} />
        </Box>

        <Box p="4">
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text children={'Join the pro and get access to all bumpers'} />
            <Heading size="md" children="Rs 399 only" />
          </VStack>

          <Button my="8" w="full" colorScheme="yellow">
            Buy Now
          </Button>
        </Box>

        <Box bg="blackAlpha.600" p="4" css={{ borderRadius: '0 0 8px 8px' }} textTransform={'uppercase'}>
          <Heading size="md" children="100% refund at cancellation" />
          <Text fontSize={'xs'} color='white' children='*Terms and Conditions Apply'/>

        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
