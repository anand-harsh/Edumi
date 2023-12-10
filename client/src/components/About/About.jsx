import React from 'react';
import {
  Container,
  Heading,
  Stack,
  VStack,
  Avatar,
  HStack,
  Text,
  Button,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://avatars.githubusercontent.com/u/94885893?s=96&v=4"
        boxSize={['40', '48']}
      />
      <Text children="Founder" opacity={'0.6'} />
    </VStack>

    <VStack justifyContent={'center'}>
      <Heading children="Harsh Anand" size={['md', 'xl']} />
      <Text
        children={'I am a Full Stack Developer, Code and Code'}
        alignItems={['center', 'left']}
      />
    </VStack>
  </Stack>
);

const VideoPLayer = () => {
  <Box>
    <video
      autoPlay
      muted
      src={introVideo}
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
    ></video>
  </Box>;
};
const About = () => {
  return (
    <Container maxW={'container-lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children={'About Us'} textAlign={['center', 'left']} />
      <Founder />

      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text>We provide the subscribed only users</Text>

        <Link to="/subscribe">
          <Button
            variant={'ghost'}
            children="Check Out our plan"
            backgroundColor="yellow.600"
          />
        </Link>
      </Stack>
      <VideoPLayer />

      <HStack my='4' p='4'>
        <RiSecurePaymentFill />
        <Heading
          children="payment is secured by razorpay"
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
};

export default About;
