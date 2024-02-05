import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Heading,
  VStack,
  Box,
  Input,
  FormLabel,
  Textarea,
  Button,
} from '@chakra-ui/react';
import GoToTopButton from '../Button/GoToTopButton';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    contactNumber: '',
    address: '',
    officeAddress: '',
    linkedin: '',
    github: '',
    twitter: '',
    instagram: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform submission logic here, for now, just redirect to /profile
    navigate('/profile');
  };

  return (
    <Container maxW="xl">
      <Heading size="lg" mb={4}>
        Update Profile
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="start">
          <Box w="100%">
            <FormLabel htmlFor="name">
              Name{' '}
              <Box as="span" color="red">
                *
              </Box>
            </FormLabel>
            <Input
              required
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="email">
              Email{' '}
              <Box as="span" color="red">
                *
              </Box>
            </FormLabel>
            <Input
              required
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@example.com"
              type="email"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="organisation">Organisation</FormLabel>
            <Input
              id="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="Your Organisation"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="contactNumber">
              Contact Number{' '}
              <Box as="span" color="red">
                *
              </Box>
            </FormLabel>
            <Input
              required
              id="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="123-456-7890"
              type="tel"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="address">
              Address{' '}
              <Box as="span" color="red">
                *
              </Box>
            </FormLabel>
            <Textarea
              required
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your Address"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="linkedin">Linkedin</FormLabel>
            <Input
              id="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="Your Linkedin"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="github">Github</FormLabel>
            <Input
              id="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="Your Github"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="twitter">Twitter</FormLabel>
            <Input
              id="twitter"
              value={formData.twitter}
              onChange={handleChange}
              placeholder="Your Twitter"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="instagram">Instagram</FormLabel>
            <Input
              id="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="Your Instagram"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="officeAddress">Office Address</FormLabel>
            <Textarea
              id="officeAddress"
              value={formData.officeAddress}
              onChange={handleChange}
              placeholder="Office Address"
            />
          </Box>

          <Button colorScheme="yellow" type="submit" mt={4} mb={4} w="full">
            Submit
          </Button>
        </VStack>
      </form>
      {/* Go to top button */}
      <GoToTopButton />
    </Container>
  );
};

export default UpdateProfile;
