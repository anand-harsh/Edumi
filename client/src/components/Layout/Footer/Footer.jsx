import React from 'react';
import { Box, Heading, HStack, VStack, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';
import {
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
  TiUser,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import './footer.css';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';

const Footer = () => {
  const bgColor = useColorModeValue('#ffffff', 'gray.800');
  const paraColor = useColorModeValue('black','#ffffff');
  const copyRightColor = useColorModeValue('#db3e00','#ffffff');

  const columnLayout = useBreakpointValue({ base: true, md: false}); // Change to column layout on medium screens
  return (
    <Box
      paddingLeft={'6vw'}
      paddingTop={'10'}
      paddingBottom={'5'}
      paddingRight={'6vw'}
      bg={bgColor}
    >
      <hr style={{ marginBottom: '30px' }}/>
        {columnLayout ? ( // If column layout
          <VStack align="flex-start"> {/* Aligning children in a column */}
            <Heading
              children="Let's Start with Edumi!"
              color={'yellow.400'}
              fontSize={'2rem'}
            />
            <a href="mailto:harsh.anand.ggl@gmail.com">
              <Box
                bg={'#db3e00'}
                padding={'1'}
                borderRadius={'5px'}
              >
                <Heading
                  fontFamily={'body'}
                  children="Send a message"
                  color={'white'}
                  fontSize={'1rem'}
                />
              </Box>
            </a>
          </VStack>
        ) : (
          <HStack justifyContent={'space-between'}> {/* Aligning children in a row */}
            <Heading
              children="Let's Start with Edumi!"
              color={'yellow.400'}
              fontSize={'2rem'}
            />
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
                />
              </Box>
            </a>
          </HStack>
        )}
      <Box flexWrap={'wrap'}>
        <Heading
          marginTop={'20px'}
          fontFamily={'body'}
          children="Your journey with Edumi promises an immersive and dynamic experience, fostering an environment where education transcends traditional boundaries."
          color={paraColor}
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
            bg={'#db3e00'}
            padding={'1'}
            borderRadius={'5px'}
            style={{ overflowY: 'hidden' }}
          >
            <Heading
              fontFamily={'body'}
              children="View on GitHub"
              color={'white'}
              size={'sm'}
              style={{ overflowY: 'hidden'}}
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
              color={copyRightColor}
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
            {/* Color mode switcher */}
            <ColorModeSwitcher />
    </Box>
  );
};

export default Footer;
