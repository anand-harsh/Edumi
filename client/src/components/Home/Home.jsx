import React from 'react';
import { Stack, VStack, Heading, Text } from '@chakra-ui/react';
import { Button, Image, Box, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/logo.png';
import './home.css';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from "../../assets/videos/intro.mp4";
import GoToTopButton from '../Button/GoToTopButton'; // Import the GoToTopButton component

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'column', 'row', 'row']}
          height="100%"
          justifyContent={['center']}
          alignItems="center"
          spacing={['15', '15', '50']}
        >
         <VStack width={['100%', '100%', '50%']} alignItems={'center'} spacing={5}>
            <Heading children="LETS START WITH EDUMI" size={['sm', 'lg', 'xl']} textAlign={'center'} fontFamily={'sans-serif'}/>
            <Text children="Your value comes from your skills" fontSize={['sm', 'lg', 'xl']} textAlign={'center'} fontFamily={'sans-serif'}/>
            {/* Corrected placement of Link */}
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow" fontFamily={'monospace'}>
                Explore Now
              </Button>
            </Link>
          </VStack>
          <GoToTopButton /> {/* Use the GoToTopButton component here */}
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
            height={'70%'}
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