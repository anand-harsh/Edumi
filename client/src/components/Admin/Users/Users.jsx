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
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../../../config/constant';

const Users = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    const token = localStorage.getItem('authToken');
    const res = await fetch(`${API_ENDPOINT}/getAllUsers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
    });
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    try {
      const data = async () => {
        const fetchUserList = await fetchUserData();
        if (!fetchUserList?.success) {
          toast.warning('You Are Not Admin User', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          navigate('/');
        }
        setUserList(fetchUserList?.users);
      };
      data();
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
            {Array.isArray(userList) &&
              userList.map(user => (
                <Tr key={user?._id}>
                  <Td>{user?.name}</Td>
                  <Td>{user?.email}</Td>
                  <Td>{user?.role}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Sidebar />
    </Grid>
  );
};

export default Users;
