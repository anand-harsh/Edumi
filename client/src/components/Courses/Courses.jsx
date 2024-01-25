import React from 'react';

import { useState } from 'react';

import {
  Heading,
  Input,
  Button,
  HStack,
  Text,
  Stack,
  Image,
  VStack,
  Container,
  Link,
} from '@chakra-ui/react';
import GoToTopButton from '../Button/GoToTopButton'; // Import the GoToTopButton component

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayListHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
        size={'sm'}
      />
      <Text noOfLines={2} children={description} />
      <Text
        children={'Creator'}
        fontWeight={'bold'}
        textTransform="uppercase"
      />
      <Text children={creator} fontFamily={'body'} textTransform="uppercase" />
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        overflow={'hidden'}
      />
      <Heading size="xs" children={`Views - ${views}`} overflow={'hidden'} />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/courses/${id}`}>
          <Button variant={'ghost'} colorScheme={'yellow'}>
            Watch Now
          </Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => {
            addToPlayListHandler(id);
          }}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const addToPlayListHandler = () => {
  console.log('Added to playlist');
};

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

      <HStack
        overflow={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} overflow={'hidden'} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'Sample'}
          description={'sample des'}
          imageSrc={
            'https://cdn.pixabay.com/illustrations/cat-feline-box-kawaii-animal-7928232/'
          }
          views={34}
          id={'sampleid'}
          creator={'sample creator'}
          lectureCount={2}
          addToPlayListHandler={addToPlayListHandler}
        />
      </Stack>
      <GoToTopButton />
    </Container>
  );
};

export default Courses;
