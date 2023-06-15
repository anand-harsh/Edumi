import React from 'react';
import { Box, Stack, VStack, Heading, HStack } from '@chakra-ui/react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import './footer.css';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.800'} minH={'4vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            children="Harsh Anand(Github: anand-harsh)"
            color={'yellow.400'}
            size={'sm'}
          />
        </VStack>
        <HStack spacing={['2', '10']} justifyContent="center">
          <a href="http://www.youtube.com">
            <TiSocialYoutubeCircular
              size="2.4rem"
              color="white"
              target={'blank'}
              style={{ marginRight: '20px' }}
            />
          </a>
          <a href="http://www.instagram.com">
            <TiSocialInstagramCircular
              size="2.4rem"
              color="white"
              target={'blank'}
              style={{ marginRight: '20px' }}
            />
          </a>
          <a href="http://www.github.com">
            <DiGithub
              size="2.4rem"
              color="white"
              target={'blank'}
              style={{ marginRight: '20px' }}
            />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
