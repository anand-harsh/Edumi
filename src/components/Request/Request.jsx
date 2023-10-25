import {
    Container,
    Heading,
    VStack,
    Box,
    Input,
    FormLabel,
    Button,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  
  import React from 'react';
  
  const Request = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [course, setCourse] = React.useState('');
  
    return(
    <Container h="92vh">
      <VStack
      h='full'
      justifyContent='center'
      spacing={'16'}
      >
        <Heading children={'Request New Course'} />
        <form action="" style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your Name"
              type="text"
              focusBorderColor="yellow.400"
            />
          </Box>
  
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Abc"
              type="email"
              focusBorderColor="yellow.400"
            />
          </Box>
  
          <Box my={'4'}>
            <FormLabel htmlFor="course" children="Course" />
            <Input
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain the Course"
              focusBorderColor="yellow.400"
            />
          </Box>
  
          <Button my={'4'} colorScheme="yellow" type="submit">
            Send
          </Button>
  
          <Box my={'4'}>
              See Available Courses!
              <Link to="/courses">
              {' '}
                <Button colorScheme="yellow" variant={'link'}>
                Click
                </Button>{' '}
              </Link>
              here
            </Box>
        </form>
      </VStack>
    </Container>
      )
  };
  
  export default Request;
  