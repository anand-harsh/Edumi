import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';
import {
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
  TiUser,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import './footer.css';

const Footer = () => {
  return (
    <Box
      paddingLeft={'6vw'}
      paddingTop={'10'}
      paddingBottom={'5'}
      paddingRight={'6vw'}
      bg={'#0d0b1e'}
    >
      <HStack style={{ overflowY: 'hidden' }} justifyContent={'space-between'}>
        <Box>
          <Heading
            children="Let's Start with Edumi!"
            color={'yellow.400'}
            style={{ overflowY: 'hidden' }}
            fontSize={'2rem'}
          />
        </Box>
        <a href="mailto:harsh.anand.ggl@gmail.com">
          <Box
            bg={'#db3e00'}
            padding={'1'}
            borderRadius={'5px'}
            marginRight={'3vw'}
          >
            <Heading
              fontFamily={'body'}
              children="Send a message"
              color={'white'}
              fontSize={'1rem'}
              style={{ overflowY: 'hidden', display: 'inline' }}
            />
          </Box>
        </a>
      </HStack>
      <Box flexWrap={'wrap'}>
        <Heading
          fontFamily={'body'}
          children="Your journey with Edumi promises an immersive and dynamic experience, fostering an environment where education transcends traditional boundaries."
          color={'white'}
          size={'sm'}
          style={{ overflowY: 'hidden' }}
          marginBottom={'20px'}
          flexWrap={'wrap'}
          overflowWrap={'anywhere'}
          className="description"
        />
      </Box>
      <HStack style={{ overflowY: 'hidden' }}>
        <Box>
          <Heading
            fontFamily={'body'}
            children="Build with us"
            color={'#db3e00'}
            size={'md'}
            style={{ overflowY: 'hidden' }}
            width={'150px'}
          />
        </Box>
        <a href="https://www.github.com/anand-harsh/Edumi">
          <Box
            width={'130px'}
            bg={'white'}
            padding={'1'}
            borderRadius={'5px'}
            style={{ overflowY: 'hidden' }}
          >
            <Heading
              fontFamily={'body'}
              children="View on GitHub"
              color={'black'}
              size={'sm'}
              style={{ overflowY: 'hidden', display: 'inline' }}
              width={'200px'}
            />
          </Box>
        </a>
      </HStack>

      <Box className="foot-sec-container">
        <HStack
          marginLeft={'1vw'}
          marginTop={'30px'}
          style={{ overflowY: 'hidden' }}
        >
          <a href="https://www.codedev.me">
            <TiUser
              size="2rem"
              color="#db3e00"
              target={'blank'}
              style={{ marginRight: '10px' }}
            />
          </a>
          <a href="https://www.instagram.com/i.harshanand/">
            <TiSocialInstagramCircular
              size="2rem"
              color="#db3e00"
              target={'blank'}
              style={{ marginRight: '10px' }}
            />
          </a>
          <a href="https://www.github.com/anand-harsh/Edumi">
            <DiGithub
              size="2rem"
              color="#db3e00"
              target={'blank'}
              style={{ marginRight: '10px' }}
            />
          </a>
          <a href="https://www.linkedin.com/in/anand-harsh/">
            <TiSocialLinkedinCircular
              size="2rem"
              color="#db3e00"
              target={'blank'}
              style={{ marginRight: '10px' }}
            />
          </a>
        </HStack>
        <HStack justifyContent="space-between" className='foot-sec-child'>
          <Box>
            <Heading
              fontFamily={'body'}
              children="© 2024 Edumi. All rights reserved."
              color={'white'}
              size={'sm'}
              style={{ overflowY: 'hidden' }}
              width={'500px'}
              fontSize={'1.1rem'}
            />
          </Box>
          <Box display={'block'}>
            <Heading
              fontFamily={'body'}
              children="edumi"
              color={'#db3e00'}
              size={'lg'}
              style={{ overflowY: 'hidden' }}
              width={'100px'}
              marginRight={'3vw'}
            />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
