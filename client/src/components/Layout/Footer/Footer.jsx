import React from 'react';
import { Box, Stack, VStack, Heading, HStack } from '@chakra-ui/react';
import {
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
  TiUser
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import './footer.css';

const Footer = () => {
  return (
    <Box paddingLeft={'20'} paddingTop={'10'} bg={'#0d0b1e'} minH={'4vh'}>
      <Stack direction={['column', 'row']}>

        <VStack alignItems={['center', 'flex-start']} width="full" height="300px">
        <HStack spacing={['2', '55vw']} style={{ overflowY: "hidden" }} justifyContent="center">
        <Heading children="Let's Start with Edumi!" color={'yellow.400'} style={{ overflowY: "hidden" }} size={'lg'} />
        <a href="mailto:harsh.anand.ggl@gmail.com">
            <Box width={"130px"} bg={'#db3e00'} padding={'1'} borderRadius={'5px'} >
            <Heading
              fontFamily={'body'}
              children="Send a message"
              color={'white'}
              size={'sm'}
              style={{ overflowY: "hidden",display: "inline" }}
              width={"200px"}
            />
            </Box>
            </a>
          </HStack>
         
          <Heading
            fontFamily={'body'}
            children="Your journey with Edumi promises an immersive and dynamic experience, fostering an environment where education transcends traditional boundaries."
            color={'white'}
            size={'sm'}
            style={{ overflowY: "hidden" }}
            width={"400px"}
            marginBottom={"20px"}
          />

          <HStack spacing={['2', '5']} style={{ overflowY: "hidden" }} justifyContent="center">
            <Heading
              fontFamily={'body'}
              children="Build with us"
              color={'#db3e00'}
              size={'md'}
              style={{ overflowY: "hidden"}}
              width={"150px"}
            />
            <a href="https://www.github.com/anand-harsh/Edumi">
            <Box width={"130px"} bg={'white'} padding={'1'} borderRadius={'5px'} style={{ overflowY: "hidden" }}>
            <Heading
              fontFamily={'body'}
              children="View on GitHub"
              color={'black'}
              size={'sm'}
              style={{ overflowY: "hidden",display: "inline" }}
              width={"200px"}
            />
            </Box>
            </a>

          </HStack>


          <HStack spacing={['2', '3']} justifyContent="center" marginLeft={"30px"} marginTop={"30px"} style={{ overflowY: "hidden" }}>
            <a href="https://www.codedev.me">
              <TiUser
                size="2rem"
                color="#db3e00"
                target={'blank'}
                style={{ marginRight: '3px' }}
              />
            </a>
            <a href="https://www.instagram.com/i.harshanand/">
              <TiSocialInstagramCircular
                size="2rem"
                color="#db3e00"
                target={'blank'}
                style={{ marginRight: '3px' }}
              />
            </a>
            <a href="https://www.github.com/anand-harsh/Edumi">
              <DiGithub
                size="2rem"
                color="#db3e00"
                target={'blank'}
                style={{ marginRight: '3px' }}
              />
            </a>
            <a href="https://www.linkedin.com/in/anand-harsh/">
              <TiSocialLinkedinCircular
                size="2rem"
                color="#db3e00"
                target={'blank'}
                style={{ marginRight: '3px' }}
              />
            </a>
          </HStack>
          <HStack spacing={['2', '300']} justifyContent="center" marginLeft={"35vw"}>
          <Heading
              fontFamily={'body'}
              children="© 2024 Edumi. All rights reserved"
              color={'white'}
              size={'sm'}
              style={{ overflowY: "hidden"}}
              width={"300px"}
              fontSize={'0.7rem'}
            />
            <Heading
              fontFamily={'body'}
              children="edumi"
              color={'#db3e00'}
              size={'lg'}
              style={{ overflowY: "hidden"}}
              width={"100px"}
              // fontSize={'0.7rem'}
              marginLeft={'1vw'}
            />
          </HStack>
         
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;