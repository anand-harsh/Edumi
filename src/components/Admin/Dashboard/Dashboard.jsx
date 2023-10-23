import React from 'react';
import { Grid, Box, Text, Heading, Stack, HStack, Progress, GridItem,Center } from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { RiArrowUpDownFill, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';
import { Doughnut } from 'react-chartjs-2';

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    h={'20%'}
    boxShadow={'10px 10px 20px #d9d9d9'}
    p="8"
    borderRadius={'lg'}
  >
    <Text children={title} />

    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight="bold" children={qty} />
      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowUpDownFill color="red" />
        )}
      </HStack>
    </HStack>
    <Text opacity={0.6} children={'Since last month'} />
  </Box>
);
const Bar = ({ title, value, profit }) => (
  <Box py="4" px={['0', '20']}>
    <Heading size="sm" children={title} mb="2" />
    <HStack w="full" alignItems={'center'}>
      <Text children={profit ? "0%" : `-${value}%`} /> {/* fix */}
      <Progress w="full" value={profit ? value : 0} colorScheme="blue" />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
)
const Dashboard = () => {
  return (
    <Grid
      css={{
        cursor: `url(), default`, // need to be updated
      }}
      minH={'100vh'}
      templateColumns='repeat(3, 1fr)'
    >
      {/* this shows the updation status of Dashboard */}
      <GridItem rowStart={2} colStart={1} colEnd={4}  >
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
        />
      </GridItem>

      {/* heading thats says dashboard  */}
      <GridItem rowStart={1} colStart={1} colEnd={4} > <Heading
        children="Dashboard"
        
        mb="16"
        textAlign={'center'}
      /></GridItem>

      {/* this item is the sidebar of the contents */}
      <GridItem colStart={1} colEnd={4} rowStart={3} >
        <Center>
        <Sidebar />
        </Center>
      </GridItem>
      {/* this  a group of tabs */}
      <GridItem colStart={1} colEnd={4} rowStart={4} >
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
          p="2%"
        >
          <Databox title="Views" qty={123} qtyPercentage={30} profit={true} />
          <Databox title="Users" qty={23} qtyPercentage={78} profit={true} />
          <Databox
            title="Subscription"
            qty={12}
            qtyPercentage={67}
            profit={true}
          />
        </Stack>
      </GridItem>
      {/* this grid item shows the box of the line graph */}
      <GridItem rowstart={5} colStart={1} colEnd={4} pt="5%" >
        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '-66']}
          boxShadow={'10px 10px 20px #d9d9d9'}
        >
          <Heading
            textAlign={['center', 'left']}
            size="md"
            children="Views Graph"
            pt={['8', '0']}
            ml={['0', '10']}
          />
          {/* Line graph here */}
          <LineChart />
          <Grid templateColumns={['1fr', '2fr 1fr']} />
          <Box p="4">
            <Heading
              textAlign={['center', 'left']}
              size="md"
              children="Progress Bar"
              my="8"
              ml={['0', '16']}
            />
          </Box>
          <Bar profit={true} title="Views" value={30} />
          <Bar profit={true} title="Users" value={78} />
          <Bar profit={true} title="Subscriptions" value={0} />
        </Box>
      </GridItem>
      {/* this item shows a piechart */}
      <GridItem rowStart={6} colStart={2} colEnd={3} >
        <Box p={['0', '16']}
          boxSizing='border-box'
          py="4">
          <Heading textAlign={'center'} size="md" mb="4" children="Users" />
          {/* Dought graph */}
          <DoughnutChart />
        </Box>
      </GridItem>

    </Grid>
  );
};

export default Dashboard;
