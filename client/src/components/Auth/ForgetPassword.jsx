import React from 'react';
import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';

const ForgetPassword = () => {
  const [email, setEmail] = React.useState('');
  return (
    <Container py="16" h="90vh">
      <form action="">
        <Heading
          children={'Forget Password'}
          textTransform={'uppercase'}
          my="16"
          textAlign={['center', 'left']}
        />

        <VStack>
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your Email"
            type="email"
            focusBorderColor="yellow.400"
          />
          <Button type="submit" w={'full'} colorScheme="yellow">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
