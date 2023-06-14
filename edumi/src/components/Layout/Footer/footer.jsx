import React from 'react';
import { Box, Stack, VStack, Heading } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.800'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            children="Harsh Anand(Github: anand-harsh)"
            color={'yellow.400'}
            size={"sm"}
          />
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
