import React, { useState } from 'react';
import { Grid, Box, Heading, Text, VStack } from '@chakra-ui/react';
import introVideo from '../../assets/videos/intro.mp4';
import GoToTopButton from '../Button/GoToTopButton'; // Import the GoToTopButton component

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'id1',
      title: ' title 1',
      description: ' description 1',
      video: {
        url: 'Dwdwecac',
      },
    },
    {
      _id: 'id2',
      title: ' title 2',
      description: ' description 2',
      video: {
        url: 'Dwdwecac',
      },
    },
    {
      _id: 'sasasasa',
      title: 'sample title',
      description: 'sample description',
      video: {
        url: 'Dwdwecac',
      },
    },
  ];
  return (
    <Grid minH="90vh" templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width="100%"
          autoPlay
          controls
          src={introVideo}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m="4" children="Description" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>


      <VStack>
        {lectures.map((element, index) => (
          <button
          onClick={()=>setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgb(0, 0, 0, 0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
      <GoToTopButton /> {/* Use the GoToTopButton component here */}


    </Grid>
  );
};

export default CoursePage;
