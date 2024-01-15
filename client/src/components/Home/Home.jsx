import React, { useEffect ,useState} from 'react';
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
    // State to determine whether to show the "Go to Top" button
  const [showButton, setShowButton] = useState(false);
  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  // Function to handle scroll events and update the state accordingly
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  // Effect to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
          {showButton && (
          <Button
            size="lg"
            colorScheme="blue"
            onClick={scrollToTop}
            className="go-to-top-button"
            position="fixed" // Fixed position to stay in view
            bottom="4"        // 4 units from the bottom
            right="4"         // 4 units from the right
          >
            Go to Top
          </Button>
      )}

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
