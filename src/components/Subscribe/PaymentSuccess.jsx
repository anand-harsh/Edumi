import { Container, Heading, VStack, Box, Text , Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import React from 'react';

const PaymentSuccess = () => {
  return (
    <Container>
      <Heading children="You have a pro pack" my="8" textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        pb="16"
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box w="full" h='3rem' bg="yellow.400" css={{ borderRadius: '8px 8px 0 0' }}>
          <Text>Payment Success</Text>
        </Box>

        <Box p="4">
          <VStack textAlign={'center'} px="8" mt="4" spacing="8">
            <Text>Congratulations You are a Pro member !!</Text>

            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>

        <Link to="/">
          <Button variant='ghost'>Go to Profile</Button>
        </Link>

        <Heading size='xs'>
          Reference: wesrdtfyfrdesrtygfrdsgt
        </Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
