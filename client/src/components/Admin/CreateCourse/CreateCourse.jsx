import React from 'react';
import {
  Grid,
  Box,
  Heading,
  Container,
  VStack,
  Input,
  Select,
  Image,
  Button,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../../../config/constant';

const CreateCourse = () => {
  const navigate = useNavigate();

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [createdBy, setCreatedBy] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [image, setImage] = React.useState('');
  const [imagePrev, setImagePrev] = React.useState('');
  const categories = [
    'Web Development',
    'App Development',
    'Data Science',
    'Machine Learning',
    'Data Structures',
  ];

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await fetch(`${API_ENDPOINT}/createcourse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, createdBy, category }),
        credentials: 'include',
      });

      const data = await res.json();

      if (data?.success) {
        toast.success(data?.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        return navigate('/admin/dashboard');
      } else {
        toast.error(data?.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        return navigate('/admin/createcourse');
      }
    } catch (error) {
      console.log('Error While Creating Course', error);
    }
  };

  return (
    <Grid
      css={{
        cusrsor: `url(), default`, // need to be updated
      }}
      minH={'100vh'}
      templateColumns={['1fr', '1fr 5fr']}
    >
      <Sidebar />
      <Container py="16">
        <form onSubmit={handleSubmit}>
          <Heading
            textTransform={'uppercase'}
            children="Create Course"
            my="16"
            textAlign={['center', 'left']}
            style={{ overflowY: 'hidden' }}
          />

          <VStack m="auto" spacing="8">
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              focusBorderColor="purple.300"
              required
            />
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              type="text"
              focusBorderColor="purple.300"
              required
            />
            <Input
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Created By"
              type="text"
              focusBorderColor="purple.300"
              required
            />

            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
            >
              <option value="">Category</option>
              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              type={'file'}
              focusBorderColor="purple.300"
              css={{
                '&::file-selector-button': {
                  // ...fileUploadCss,
                  color: 'purple',
                },
              }}
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize="64" objectFit={'contain'} />
            )}
            <Button w="full" colorScheme="purple" type="submit">
              Create Course
            </Button>
          </VStack>
        </form>
      </Container>
    </Grid>
  );
};

export default CreateCourse;
