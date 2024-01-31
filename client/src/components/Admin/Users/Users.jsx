import React, { useEffect, useState } from 'react';
import {
  Grid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { API_ENDPOINT } from '../../../config/constant';

const Users = () => {
  const [userList, setUserList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch(`${API_ENDPOINT}/getAllUsers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    try {
      fetchUserData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Grid
      css={{
        cusrsor: `url(), default`, // need to be updated
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <TableContainer margin={'10px'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Sidebar />
    </Grid>
  );
};

export default Users;
