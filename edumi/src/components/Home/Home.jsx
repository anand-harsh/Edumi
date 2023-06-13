import React from 'react';
import { Stack, VStack, Heading, Text } from '@chakra-ui/react';
import { Button, Image, Box, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/logo.png';
import './home.css';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from "../../assets/videos/intro.mp4"


const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="LETS START WITH EDUMI" size={'2x1'} />
            <Text children="Your value comes from your skills" />
            <Link to="/courses" />
            <Button size={'lg'} colorScheme="yellow">
              Explore Now
            </Button>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box backgroundColor={'gray.800'}>
        <Heading
          className="brand"
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="OUR BRANDS"
        />

        <HStack className="brandsBanner" justifyContent={'space-evenly'}>
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video autoPlay controls src={introVideo}
        controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default Home;
