import {
  Avatar,
  Container,
  Heading,
  Stack,
  Button,
  VStack,
  HStack,
  Text,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))?.User;
  const user = {
    name: userData?.name,
    email: userData?.email,
    createdAt: new Date(userData?.createdAt).toLocaleDateString('en-In'),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'sdfgrertfg',
        poster:
          'https://cdn.pixabay.com/illustrations/cat-feline-box-kawaii-animal-7928232/',
      },
    ],
  };
  return (
    <Container minH={'95vh'} maxW="container.lg" py="8">
      <Heading children="Profile" m="8" textTransform={'uppercase'} />

      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button colorScheme="yellow" variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>{' '}
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>{' '}
          <HStack>
            <Text children="CreatedAt" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>{' '}
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button>Cancel Subscription</Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="updateprofile">
              <Button>Update Profile</Button>
            </Link>

            <Link to="changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Playlist" size={'md'} my="8"></Heading>

      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p="4"
        >
          {user.playlist.map((element, index) => (
            <VStack w="48" m="2" key={element.course}>
              <Image
                boxSize={'full'}
                objectFit="contain"
                src={element.poster}
              />

              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button colorScheme="yellow" variant={'ghost'}>
                    Watch Now
                  </Button>
                </Link>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default Profile;
