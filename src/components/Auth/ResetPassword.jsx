import React from 'react';
import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { useParams as userParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = React.useState('');
  const params = userParams();

  console.log(params);
  return (
    <Container py="16" h="90vh">
      <form action="">
        <Heading
          children={'Reset Password'}
          textTransform={'uppercase'}
          my="16"
          textAlign={['center', 'left']}
        />

        <VStack>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter new Password"
            type="password"
            focusBorderColor="yellow.400"
          />
          <Button type="submit" w={'full'} colorScheme="yellow">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
