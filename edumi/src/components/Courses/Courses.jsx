import React from 'react';
import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import { Input } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web Development',
    'App Development',
    'Data Science',
    'Machine Learning',
    'Data Structures',
  ];
  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search for a course"
        type={'text'}
        size="lg"
        width="50%"
        marginY={'4'}
        focusBorderColor="yellow.500"
      />

      <HStack overflow={'auto'} paddingY="8" css={{"&::-webkit-scrollbar":{
        display:'none'
      }}}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} overflow={'hidden'}/>
          </Button>
        ))}
      </HStack>
    </Container>
  );
};

export default Courses;
