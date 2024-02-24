import {
  Container,
  Heading,
  VStack,
  Box,
  Input,
  FormLabel,
  Button,
  Flex,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import GoToTopButton from '../Button/GoToTopButton';
import requestImage from '../../assets/images/contact.jpg';

const Request = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [course, setCourse] = React.useState('');

  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const calculateViewportHeight = () => {
      const height = window.innerHeight;
      const offset = 134; // 20 pixels
      setViewportHeight(height - offset);
    };
    calculateViewportHeight();
    window.addEventListener('resize', calculateViewportHeight);
    return () => {
      window.removeEventListener('resize', calculateViewportHeight);
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Container marginLeft="10%" maxWidth="80%">
      <Flex justifyContent="space-between">
        <VStack justifyContent="center" spacing={'5'} h={`${viewportHeight}px`}>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Heading
              children={'Request New Course'}
              marginBottom="4px"
              fontFamily="'Uncut Sans', sans-serif"
              color={textColor} // Set text color
            />

            <Box my={3} textAlign="left" color={textColor}>
              {' '}
              {/* Set text color */}
              You can reach us anytime via
              <Link
                to="/request"
                style={{ textDecoration: 'none', marginLeft: '5px' }}
              >
                <Button colorScheme="orange" variant={'link'}>
                  hi@edumi
                </Button>
              </Link>
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your Name"
                focusBorderColor="yellow.400"
                width={{ base: '100%', md: '505px' }} // Responsive width
                height="45px"
              />
            </Box>
          
            <Box>
              <FormLabel htmlFor="email" children="Email Address" />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder=" &#128231; Enter your Email Address"
                type="email"
                focusBorderColor="yellow.400"
                width={{ base: '100%', md: '505px' }} // Responsive width
                height="45px"
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="Coursename" children="Course Name" />
              <Input
                required
                id="Coursename"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter the course name"
                focusBorderColor="yellow.400"
                width={{ base: '100%', md: '505px' }} // Responsive width
                height="45px"
              />
            </Box>

            <Box my={3}>
              <FormLabel htmlFor="course" children="Brief description" />
              <Input
                required
                id="course"
                value={course}
                onChange={e => setCourse(e.target.value)}
                placeholder="Tell us a little about the course...."
                focusBorderColor="yellow.400"
                width={{ base: '100%', md: '505px' }} // Responsive width
                paddingTop="19px"
                paddingBottom="80px"
                paddingLeft="10px" // Add padding to the left
                textAlign="left"
              />
            </Box>

            <Button
              my={3}
              colorScheme="#EB5017"
              background="#EB5017"
              width={{ base: '100%', md: '505px' }} // Responsive width
              height="45px"
              borderRadius="sm"
              gap="10px"
            >
              Send Request
            </Button>
          </form>
        </VStack>

        <Box
          width={{ base: '100%', md: '50%' }}
          height="auto"
          style={{ filter: 'blur(2px)', opacity: '0.1' }}
        >
          <Image
            src={requestImage}
            alt="Request Image"
            width="100%"
            height="90%"
          />
        </Box>
      </Flex>
      <GoToTopButton />
    </Container>
  );
};

export default Request;
