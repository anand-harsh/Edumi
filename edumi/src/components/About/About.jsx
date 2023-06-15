import React from 'react';
import {
  Container,
  Heading,
  Stack,
  VStack,
  Avatar,
  Text,
} from '@chakra-ui/react';

const Founder = () => {
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar boxSize={['40', '48']} />
      <Text children="Co-Founder" opacity={'0.6'} />
    </VStack>

    <VStack>
      <Heading children="Harsh Anand" size={['md', 'xl']}>
        <Text children="I am a Full Stack Developer, Code and Code" alignItems={['center', 'left']}/>
      </Heading>
    </VStack>
  </Stack>;
};
const About = () => {
  return (
    <Container maxW={'container-lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children={'About Us'} textAlign={['center', 'left']} />
      <Founder />
    </Container>
  );
};

export default About;
