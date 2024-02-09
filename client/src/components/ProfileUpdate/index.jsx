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
import { API_ENDPOINT } from '../../config/constant';
import { toast } from 'react-toastify';

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

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`${API_ENDPOINT}/user/details/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: 'include',
    });

    const data = await res.json();

    if (data?.success) {
      toast.success('Profile Updated Successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      localStorage.setItem('userData', JSON.stringify({ User: data?.User }));
      navigate('/profile');
    } else {
      toast.error('Failed to Update Profile', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      navigate('profile/updateprofile');
    }
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
              name="name"
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@example.com"
              type="email"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="organisation">Organisation</FormLabel>
            <Input
              name="organisation"
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
              name="contactNumber"
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
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your Address"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="linkedin">Linkedin</FormLabel>
            <Input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="Your Linkedin"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="github">Github</FormLabel>
            <Input
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="Your Github"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="twitter">Twitter</FormLabel>
            <Input
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              placeholder="Your Twitter"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="instagram">Instagram</FormLabel>
            <Input
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="Your Instagram"
            />
          </Box>

          <Box w="100%">
            <FormLabel htmlFor="officeAddress">Office Address</FormLabel>
            <Textarea
              name="officeAddress"
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
