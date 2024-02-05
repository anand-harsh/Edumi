import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Heading,
  VStack,
  HStack,
  Box,
  Input,
  FormLabel,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { MdStar } from 'react-icons/md'; // Import the MdStar icon
import GoToTopButton from '../Button/GoToTopButton'; // Import the GoToTopButton component

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
    <Container>
      <Heading size="lg" mb={4}>
        Update Profile
      </Heading>
      <form onSubmit={handleSubmit}>
        <HStack spacing={8} align="start">
          {/* Personal Information Section */}
          <VStack spacing={4} align="start">
            <Box>
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

            <Box>
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

            <Box>
              <FormLabel htmlFor="organisation">Organisation</FormLabel>
              <Input
                id="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Your Organisation"
              />
            </Box>

            <Box>
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

            <Box>
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
          </VStack>

          {/* Social Media Links Section */}
          <VStack spacing={4} align="start">
            <Box>
              <FormLabel htmlFor="linkedin">Linkedin</FormLabel>
              <Input
                id="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="Your Linkedin"
              />
            </Box>

            <Box>
              <FormLabel htmlFor="github">Github</FormLabel>
              <Input
                id="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="Your Github"
              />
            </Box>

            <Box>
              <FormLabel htmlFor="twitter">Twitter</FormLabel>
              <Input
                id="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="Your Twitter"
              />
            </Box>

            <Box>
              <FormLabel htmlFor="instagram">Instagram</FormLabel>
              <Input
                id="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="Your Instagram"
              />
            </Box>

            <Box>
              <FormLabel htmlFor="officeAddress">Office Address</FormLabel>
              <Textarea
                id="officeAddress"
                value={formData.officeAddress}
                onChange={handleChange}
                placeholder="Office Address"
                cols={22}
              />
            </Box>
          </VStack>
        </HStack>
        <Button colorScheme="yellow" type="submit" mt={4} mb={4} w="full">
          Submit
        </Button>
      </form>
      {/* Go to top button */}
      <GoToTopButton />
    </Container>
  );
};

export default UpdateProfile;
