import React from 'react';
import { Grid, Box, Text, Heading, Stack, HStack } from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { RiArrowUpDownFill, RiArrowUpLine } from 'react-icons/ri';

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    h={"20%"}
    boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'}
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

const Dashboard = () => {
  return (
    <Grid
      css={{
        cusrsor: `url(), default`, // need to be updated
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box boxSizing="border-box" py="16" px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
        />
      </Box>

      <Heading
        children="Dashboard"
        ml={['0', '16']}
        mb="16"
        textAlign={['center', 'left']}
      />
      <Stack
        direction={['column', 'row']}
        minH={'24'}
        justifyContent={'space-evenly'}
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
      
      <Sidebar />
      <Box
        m={['0', '16']}
        borderRadius={'lg'}
        p={['0', '16']}
        mt={['4', '-66']}
        boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'}
      >
        <Heading
          textAlign={['center', 'left']}
          size="md"
          children="Views Graph"
          pt={['8', '0']}
          ml={["0", "10"]}

        />
        {/* Line graph here */}
      </Box>
    </Grid>
  );
};

export default Dashboard;
